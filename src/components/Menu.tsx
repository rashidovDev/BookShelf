import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {Navbar, Books, Register,AddBookModal,UpdateModal} from "./navigate"


const Menu : React.FC = () => {

  const [key, setKey] = useState<string>("")
  const [secret, setSecret] = useState<string>("")

  return (
    <>
    <Navbar/>
    <AddBookModal/>
    <UpdateModal/>
    <Routes>
        <Route path='/' element={<Books
        key={key}
        setKey={setKey}
        secret={secret}
        setSecret={setSecret}
        />}/>
        <Route path='/register' element={<Register
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