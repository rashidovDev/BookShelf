import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Input from './utils/input/Input';
import Button from './utils/button/Button';
import { Typography } from '@mui/material'

const Register : React.FC = () => {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [key, setKey] = useState<string>('')
  const [secret, setSecret] = useState<string>('')

  return (
    <Box
    sx={{width:"35%",borderRadius:"10px", margin:"auto",padding:"15px",background:"#999",marginTop:"50px"}}
    >
    <Typography
    variant='h4'
    marginY="10px"
    sx={{textAlign:"center", color : "#fff"}}
    >Registration</Typography>
    <form>
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