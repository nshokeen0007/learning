import { useState } from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import './App.css'
import Headers from './common/header'
import Singup from './components/singup'
import GetData from './components/getdata'

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Headers/>
   <Routes>
    <Route path='/singup' element={<Singup/>}></Route>
    <Route path='/getdata' element={<GetData/>}></Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
