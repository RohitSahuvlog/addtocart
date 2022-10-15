import React from 'react'
import { Avatar, Box, Button, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {DeleteIcon } from '@chakra-ui/icons'
import { CartState, cart } from '../Context/Context';
import { useEffect } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const {state:{products},productState:{
        byStock,byFastDelivery,sort,byRating,searchQuery
    },productDispatch}=CartState()
    const {
        state: { cart },
        dispatch,
    } = CartState();
    const transform =()=>{
        let sortedProducts = products;
        if(sort){
            sortedProducts = sortedProducts.sort((a,b)=>
               sort === "lowTohigh" ? a.price -b.price :b.price-a.price 
            )
            return sortedProducts
        }
        if(!byStock){
            sortedProducts = sortedProducts.filter((prod)=>prod.inStock)
        }
        if(byFastDelivery){
            sortedProducts = sortedProducts.filter((prod)=>prod.byFastDelivery)
        }
        if(byRating){
            sortedProducts = sortedProducts.filter((prod)=>prod.ratings >=byRating)
        }
        if(searchQuery){
            sortedProducts= sortedProducts.filter((prod)=>{
                return prod.name.ToLower().includes(searchQuery)
            })
        }

        return sortedProducts
    }

    return (
        <Box>
            <Box w="100%" h="40px" bgColor="black" display={"flex"} m="auto" justifyContent="space-evenly" alignItems={"center"}>


                <Box color={"white"} >
                    <Link to="/">
                        Shopping Crad
                    </Link>

                </Box>
                <Box  border="1px solid white" padding={"2px"} w="28%"  >
                    <Input w="98%" placeholder='search a product' onChange={(e)=>{
                        productDispatch({
                            type:"FILTER_BY_SEARCH",
                            payload:e.target.value,
                        })
                    }} />
                </Box>
                <Box padding={"10px"} >
                    <Menu>
                        <MenuButton as={Button} rightIcon={<AiOutlineShoppingCart />}>
                            {cart.length}
                        </MenuButton>
                        <MenuList  bgColor={"white"} w="200px" margin={"auto"}>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => (
                                        <span className='cartitem' key={prod.uuid} display="flex">
                                            <Box display={"flex"} justifyContent="center" alignItems={"center"} bgColor="white" border="1px solid black" >
                                                <Box margin={5}>
                                                    <Avatar size='2xs'  borderRadius={"50%"}   width={"50px"} src={prod.avatar} />
                                                </Box>

                                                <Box>
                                                    <Text>{prod.productName}</Text>
                                                    <Text>{(prod.price).split(".")[0]}</Text>
                                                </Box>
                                                <Box>
                                                    <DeleteIcon onClick={()=>{
                                                        dispatch({
                                                            type:"Remove_From_Card",
                                                            payload:prod
                                                        })
                                                    }}/>

                                                </Box>
                                            </Box>





                                        </span>
                                    ))}



<Button  bgColor="blue" border={"none"} h="20px" color={"white"} onClick={()=>{
    navigate("/cart")
}} width="100%">Go To cart</Button>

                                </>
                            ) : ("")}


                        </MenuList>
                    </Menu>

                </Box>

            </Box>
            <Box>

            </Box>

        </Box>
    )
}

export default Navbar
