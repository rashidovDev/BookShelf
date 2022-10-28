import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { RootState } from '../store';
import { addBookAction } from '../store/slices/addBookSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '../utils/input/Input';
import Button from '../utils/button/Button';
import axios from "axios"
var md5 = require('md5')

const AddBookModal = () => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [isbn, setIsbn] = useState<string>('')

      const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault()
        try{
          const newData = {
              isbn
          }

          const method = "POST";
          const url = "https://23v112.lavina.tech/books";
          const body = `"isbn":"${isbn}"`
          const secret = "AnvarSecret"
          const key = "anvar"
  
          const sign = md5(`${method}${url}{${body}}${secret}`)
          await axios.post(url,newData, {
            headers : {
                 "Key" :  key,
                 "Sign" : sign
            }
          })
          setIsbn("")
          window.location.reload();
        }
        catch(err){
          console.log(err)
        }
      }

      const dispatch = useDispatch()
      const addbook = useSelector((state : RootState) => state.addBookSlice.addBookIsVisible)
    
      const handleChange = () => {
      dispatch(addBookAction.toggle1())
      }

  return (
    <div>
    <Modal
      open={addbook}
      onClose={handleChange}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
    sx={{width:"35%",borderRadius:"10px", margin:"auto",padding:"15px",background:"#333",marginTop:"100px"}}
    >
    <Typography
    variant='h4'
    marginY="10px"
    sx={{textAlign:"center", color : "#AC6B34"}}
    >Add new book</Typography>
    <form onSubmit={handleSubmit}>
    <Input  placeholder="Enter ISBN" value={isbn} setValue={setIsbn} type="text"/>
    <Button buttonName="Submit" class="form-button"/>
    </form>
    </Box>
    </Modal>
  </div>
  )
}

export default AddBookModal