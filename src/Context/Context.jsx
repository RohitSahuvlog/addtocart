import React, { useContext } from 'react'
import { createContext } from 'react';
import { faker } from '@faker-js/faker';
import { useReducer } from 'react';

import { productReducer, reducer } from './reducer';
export const cart = createContext(); 
faker.seed(99)
const Context = ({children}) => {
    const products = [...Array(20)].map(()=>({
        uuid: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        avatar: faker.image.avatar(),
        inStock: (faker.helpers.arrayElements([0,3,4,5,6])).length,
      rating:  faker.helpers.arrayElements([1, 2, 3, 4, 5])
       
    }))
    // console.log(products)
    const [state,dispatch]= useReducer(reducer,{
        products:products,
        cart:[]
    })
    const [productState,productDispatch]= useReducer(productReducer,{
  byStock:false,
  byFastDeleivery:false,
  byrating:0,
  searchQuery:""
  })
  return (
    <div>
      <cart.Provider value={{state,dispatch,productState,productDispatch}}>
        
        {children}
        
        </cart.Provider>   
        </div>
  )
}

export default Context;
export const CartState=()=>{
    return useContext(cart)
}
