import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { navigation } from '../data'

const Navbar : React.FC = () => {
  return (
     <Stack
     padding="35px 0"
     width="70%"
     margin="auto"
     direction="row"
     justifyContent="space-between"
     alignItems="center"
     color="#AC6B34"
     >
        <Stack>
        <Typography variant="h4" gutterBottom>
        <Link to="/">BookShelf</Link>
        </Typography>
        </Stack>

        <Stack
        direction="row"
        >
         {
         navigation.map((item, idx) => (
        <Typography key={idx} sx={{ marginLeft:"10px", fontSize:"18px"}} gutterBottom>
        <Link to={item.href}>{item.name}</Link>
        </Typography>
         ))
         }
        </Stack>
     </Stack>
  )
}

export default Navbar