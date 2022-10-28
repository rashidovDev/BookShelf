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
import { IId } from '../typescript';
var md5 = require('md5')

const UpdateModal : React.FC<IId> = ({id}) => {

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

      

      const [key, setKey] = useState<string>('')
      const [secret, setSecret] = useState<string>('')

      const updateHandler = async (e : React.FormEvent) => {
         const updateStatus = {
            "status":3
         }
         const method = "PATCH"
         const url = `https://23v112.lavina.tech/books/${id}`
         const body = `${`"status":3`}`

         const sign = md5(`${method}${url}{${body}}AnvarSecret`)
         await axios.patch(url,updateStatus, {
          headers : {
            "Key" : "anvar",
            "Sign" : sign
          }
         })
      }
      
      const dispatch = useDispatch()
      const updateBook = useSelector((state : RootState) => state.addBookSlice.updateIsVisible)
    
      const handleChange = () => {
      dispatch(addBookAction.toggle2())
      }

  return (
    <div>
    <Modal
      open={updateBook}
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
    >Update Status</Typography>
    <form onSubmit={updateHandler}>
    {/* <Input  placeholder="Please enter UserKey" value={key} setValue={setKey} type="text"/>
    <Input  placeholder="Please Enter UserSecret" value={secret} setValue={setSecret} type="text"/> */}
    <div>
    <Button buttonName="Update" class="form-button"/>
    </div>
    </form>
    </Box>
    </Modal>
  </div>
  )
}

export default UpdateModal