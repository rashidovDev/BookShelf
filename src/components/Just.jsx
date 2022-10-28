import React,{useState, useEffect} from 'react'
import axios from "axios"
var md5 = require('md5')

const Just = () => {

    const [dat, setDat] = useState([])

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
        //    const users = await axios.get("https://jsonplaceholder.typicode.com/users")
           setDat(users.data.data)
           console.log(dat) 
        }
        catch(err){
          console.error(err)   
        } 
      }
      useEffect(() => {
        fetchData()
      },[]) 
   
  return (
    <div> 
        {dat.map((item,idx) => (
            <>
            <h1 key={idx}>{item.book.author}</h1>
            <img src={item.book.cover} alt="" />
            </>
        ))}
    </div> 
  )
} 
 
export default Just