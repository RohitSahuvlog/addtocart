import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './Card'
import Filter from './Filter'
import Home from './Home'

const Allroutes = () => {
  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/cart" element={<Card/>}></Route>
     <Route path="/filter" element={<Filter/>}></Route>
     <Route path="/cart" element={<Card/>}></Route>

   </Routes>
   </>
  )
}

export default Allroutes