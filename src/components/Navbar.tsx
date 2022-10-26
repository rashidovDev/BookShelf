import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar : React.FC = () => {
  return (
     <Stack
     padding="30px 120px"
     direction="row"
     justifyContent="space-between"
     >
        <Stack>
        <Typography variant="h4" gutterBottom>
        <Link to="/">BookShelf</Link>
        </Typography>
        </Stack>
        <Stack
        direction="row"
        >
        <Typography variant="subtitle1" gutterBottom>
        <Link to="/books">Books</Link>
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
        <Link to="/login">Login</Link>
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
        <Link to="/register">Register</Link>
        </Typography>
        </Stack>
     </Stack>
  )
}

export default Navbar