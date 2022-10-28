import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import { Stack } from '@mui/system';
import Button from './utils/button/Button';
import {useDispatch} from "react-redux"
import { addBookAction } from './store/slices/addBookSlice';
import { Typography } from '@mui/material';
import { IId, IBook } from './typescript';
import axios from "axios"
var md5 = require('md5')

const Books : React.FC<IId> = () => {

  const [data, setData] = useState<IBook[]>([])

  const fetchData = async () => {
    try{  
       const method = "GET"
       const url = "https://23v112.lavina.tech/books"
       
       const sign = md5(`${method}${url}AnvarSecret`)

       const users = await axios.get(url,{
        headers : { 
          "Key" : 'anvar',
          "Sign" : sign
        }
       })
       setData(users.data.data)
       console.log(data)
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  const [id, setId] = useState<number | string>("")

  const deleteHandler = async (e : React.FormEvent) => {
    e.preventDefault()
    try{
    const method = "DELETE";
    const url = `https://23v112.lavina.tech/books/${id}`

    const sign = md5(`${method}${url}AnvarSecret`)
    await axios.delete(url, {
      headers : {
        "Key" : "anvar",
        "Sign" : sign
      }
    })
    window.location.reload();

    }catch(err){
      console.log(err)
    }
   
  }

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
    <Grid container rowSpacing={1} sx={{marginTop:"20px"}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {data.map((item,idx) => (  
      <Grid key={idx + 1} item md={3} xs={12} sm={6}>
        <Box sx={{padding : "15px",color : "#fff",background:"#444", width:"270px"
        ,borderRadius:"10px",height:"470px",position : "relative", margin:"auto"  }}>
          <CardMedia
          sx={{height:"250px", width:"170px",margin:"auto",marginBottom:"20px",borderRadius:"10px"}}
          component="img"
          image={item.book.cover}
          alt={item.book.title}
          />
          <Stack sx={{marginY:"10px"}}>
          <Typography variant='h5'>
          {item.book.title}
          </Typography>
          <Typography variant='subtitle1' color="aliceblue">
          {item.book.author}
          </Typography>
          <Stack 
          direction="row"
          display="flex"
          justifyContent="space-between"
          >
          <Typography variant='subtitle1' color="#999">
          {item.book.published}
          </Typography>
          <Typography variant='subtitle1' color="#fff">
          Status : {item.status}
          </Typography>
          </Stack>
          </Stack>
         <Stack sx={{position:"absolute",right:"15px", bottom : "10px"}} direction="row">
          <div onClick={() => {
            updateModal()
          }}>
          <Button buttonName='Update' class='update-button'/>
          </div>
          <form onSubmit={deleteHandler}>
          <div onClick={() => setId(item.book.id)}>
          <Button 
          buttonName='Delete' class='delete-button'/>
          </div>
          </form>
         </Stack>
        </Box>
      </Grid>
      ))}
      
     
    </Grid>
  </Box>
  )
}

export default Books