import React from 'react'
import {Routes, Route} from "react-router-dom"
import {Navbar, Home, Books, Login, Register} from "./navigate"

const Menu : React.FC = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default Menu