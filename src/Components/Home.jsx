import React from 'react'
import Card from './Card'
import Navbar from './Navbar'
import {CartState} from "../Context/Context"
import Filter from './Filter'
const Home = () => {
    const {state:{ products}} = CartState();
    
    
  return (
    <div>
      <Navbar/>
     <Filter prod={products}/>
    </div>
  )
}

export default Home
