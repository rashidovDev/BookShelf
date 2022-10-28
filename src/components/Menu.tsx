import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {Navbar, Books, Register,AddBookModal,UpdateModal} from "./navigate"


const Menu : React.FC = () => {

  const [id, setId] = useState<number | string>("")

  return (
    <>
    <Navbar/>
    <AddBookModal/>
    <UpdateModal id={id} setId={setId}/>
    <Routes>
        <Route path='/books' element={<Books setId={setId} id={id}/>}/>
        <Route path='/' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default Menu