import { useState } from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/datacheck'></Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
