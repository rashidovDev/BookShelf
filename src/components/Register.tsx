import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Input from './utils/input/Input';
import Button from './utils/button/Button';
import { Typography } from '@mui/material'
import axios from 'axios';
import { IState } from './typescript';
var md5 = require('md5');


const Register : React.FC<IState> = ({key,setKey,secret,setSecret}) => {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  
  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault()
    try{
      const registerData = {
        name, 
        email, 
        key,
        secret
       }
      const url = "https://23v112.lavina.tech/signup";
      await axios.post(url,registerData)
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <Box
    sx={{width:"35%",borderRadius:"10px", margin:"auto",padding:"15px",background:"#333",marginTop:"50px"}}
    >
    <Typography
    variant='h4'
    marginY="10px"
    sx={{textAlign:"center", color : "#fff"}}
    >Registration</Typography>
    <form onSubmit={handleSubmit}>
    <Input  placeholder="Enter name" value={name} setValue={setName} type="text"/>
    <Input  placeholder="Enter email" value={email} setValue={setEmail} type="text"/>
    <Input  placeholder="Enter key" value={key} setValue={setKey} type="text"/>
    <Input  placeholder="Enter secret" value={secret} setValue={setSecret} type="text"/>
    <Button buttonName="Submit" class="form-button"/>
    </form>
    </Box>
  )
}

export default Register