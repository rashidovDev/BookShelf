import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { RootState } from '../store';
import { addBookAction } from '../store/slices/addBookSlice';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '../utils/button/Button';
import axios from "axios"
import { IId } from '../typescript';
var md5 = require('md5')

const UpdateModal : React.FC<IId> = ({id}) => {

  const updateStatus = {
    "status":"3"
}

      const updateHandler = async (e : React.FormEvent) => {
        e.preventDefault()
         try{
           const updateStatus = {
               "status":"3"
           }
           console.log(updateStatus)
           const method = "PATCH"
           const url = `https://23v112.lavina.tech/books/${id}`
           const body = `${`"status":3`}`
  
           const sign = md5(`${method}${url}{${body}}AnvarSecret`)
           await axios.patch(url,updateStatus,{
            headers : {
              "Key" : "anvar",
              "Sign" : sign
            }
           })
           
         }catch(err){
          console.error(err)
         }
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
    variant='h5'
    marginY="10px"
    sx={{textAlign:"center", color : "#AC6B34"}}
    >Update Status</Typography>
    <form onSubmit={updateHandler}>
    <div onClick={() => {
      window.location.reload();
    }}>
    <Button buttonName="Update" class="form-button"/>
    </div>
    </form>
    </Box>
    </Modal>
  </div>
  )
}

export default UpdateModal