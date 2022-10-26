import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import Button from './utils/button/Button';

const Books : React.FC = () => {
  return (
    <Box sx={{ width: '80%', padding : "20px 0", margin : "auto" }}>
    <Stack
    marginY="10px"
    direction="row"
    display="flex"
    justifyContent="end"
    >
    <Button 
    buttonName = "Add new book"
    class = "add-button"
    />
    </Stack>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={3}>
        <Box sx={{padding : "10px", border : "1px solid red", }}>
             
        </Box>
      </Grid>

      <Grid item xs={3}>
        <Box sx={{padding : "10px", border : "1px solid red"}}>
             
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{padding : "10px", border : "1px solid red"}}>
             
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{padding : "10px", border : "1px solid red"}}>
             
        </Box>
      </Grid>
      
     
    </Grid>
  </Box>
  )
}

export default Books