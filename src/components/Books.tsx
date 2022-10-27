import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import Button from './utils/button/Button';
import {useDispatch} from "react-redux"
import { addBookAction } from './store/slices/addBookSlice';
import { Typography } from '@mui/material';
import { IState } from './typescript';
var md5 = require('md5')

const Books : React.FC<IState> = () => {

  const dispatch = useDispatch()

  const openAddModal = () => {
    dispatch(addBookAction.toggle1())
  }

  const updateModal = () => {
    dispatch(addBookAction.toggle2())
  }

  return (
    <Box sx={{ width: '80%', padding : "20px 0", margin : "auto" }}>
    <Stack
    marginY="10px"
    direction="row"
    display="flex"
    justifyContent="end"
    >
      <div onClick={openAddModal}>
    <Button 
    buttonName = "Add book"
    class = "add-button"
    />
      </div>
    </Stack>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={3} xs={6} >
        <Box sx={{padding : "15px",color : "#fff",background:"#444",borderRadius:"10px" }}>
          <Stack>
          <Typography variant='h4'>
          Atomic Habits
          </Typography>
          <Typography variant='subtitle1' color="#999">
          James Clear
          </Typography>
          <Typography variant='subtitle1' color="#777">
          2012
          </Typography>
          </Stack>
         <Stack  direction="row">
          <div onClick={updateModal}>
          <Button buttonName='Update' class='update-button'/>
          </div>
          <div>
          <Button buttonName='Delete' class='delete-button'/>
          </div>
         </Stack>
        </Box>
      </Grid>

      <Grid item md={3} xs={6}>
        <Box sx={{padding : "10px", border : "1px solid red"}}>
             
        </Box>
      </Grid>
      <Grid item md={3} xs={6}>
        <Box sx={{padding : "10px", border : "1px solid red"}}>
             
        </Box>
      </Grid>
      <Grid item md={3} xs={6}>
        <Box sx={{padding : "10px", border : "1px solid red"}}>
             
        </Box>
      </Grid>
      
     
    </Grid>
  </Box>
  )
}

export default Books