import { Box, Button, ListItem, UnorderedList } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import Navbar from './Navbar'


const Card = () => {
  const {state:{cart} ,dispatch}= CartState()

//  var cart=0
const [total,settotal]=useState()
  useEffect(()=>{
settotal(cart.reduce((acc,curr)=>acc+ Number(curr.price)*Number(curr.qty),0));
  },[cart])
  console.log(cart)
  return (
    <>
    <Navbar/>
    <div className='home'>

    <div className='productcontainer'>
    <UnorderedList listStyleType="none">
      {cart.length >= 0 && cart?.map((prod)=>{
return(
  <>
  <Box key={prod.uuid}>
  <ListItem>
    {prod.productName}
  </ListItem>
  <ListItem>
    <select value ={prod.qty} onChange={(e)=>{
dispatch({
  type:"CHANGE_CART_QTY",
  payload:{
    uuid:prod.uuid,
    qty:e.target.value
  }
})
    }}>
     
      {[...Array(prod.inStock)].map((x,index)=>{
return  <option key={index+1} value={`${index+1}`}>{index+1}</option> 
      })}
    

    </select>

  </ListItem>
  </Box>
  </>)
      })}

      </UnorderedList>
      <div>
        {/* <span className='title'>subtotal({cart.length})item</span> */}
        <span style={{fontwieght:700,fontsize:"20px"}}>
total:${total}
</span>
<Button bgColor={"yellow.200"}>
  Proceed to Checkout

</Button>
      </div>

    </div>

    </div>
    </>
  )
}

export default Card
