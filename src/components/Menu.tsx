import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {Navbar, Books, Register,AddBookModal,UpdateModal} from "./navigate"


const Menu : React.FC = () => {

  const [key, setKey] = useState<string>("")
  const [secret, setSecret] = useState<string>("")
  const [id, setId] = useState<number | string>("")

  return (
    <>
    <Navbar/>
    <AddBookModal/>
    <UpdateModal/>
    <Routes>
        <Route path='/books' element={<Books />}/>
        <Route path='/' element={<Register
        key={key}
        setKey={setKey}
        secret={secret}
        setSecret={setSecret}
        />}/>
    </Routes>
    </>
  )
}

export default Menu