import React from 'react'
import { Box, Button, Grid, HStack, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useState } from 'react'
import Rating from './Rating'
import SinglePage from './SinglePage'
import { CartState } from '../Context/Context'



const Filter = ({prod}) => {
    const [rating, setrating] = useState(0)
    // console.log(prod)
    const {productState:{
        byStock,byFastDelivery,sort,byRating
    },productDispatch}=CartState()

    return (
        <>
            <Box display={"flex"} w="100%">
                <Box border="1px solid black" width={"20%"} margin="auto">
                    <span className='ttile'>Filter products</span>
                    <Box lineHeight={3}>
                        <Box>

                            <input type="radio" name='group1' 
                            onChange={()=>productDispatch({
                                type:"SORT_BY_PRICE",
                                payload:"lowtohigh"
                            })}
                            checked={sort==="lowtohigh" ? true :false}/>
                            <label>Assending</label>
                        </Box>
                        <Box>

                            <input type="radio" name='group1'  onChange={()=>productDispatch({
                                type:"SORT_BY_PRICE",
                                payload:"hightolow"
                            })}
                            checked={sort==="hightolow" ? true :false} />
                            <label>dessending</label>
                        </Box>
                        <Box>

                            <input type="checkbox" name='group1' />
                            <label>includes out of Stock</label>
                        </Box>
                        <Box>

                            <input type="checkbox" name='group1' />
                            <label>Fast delivery only</label>
                        </Box>
                        <Box>

                            <input type="checkbox" name='group1' />
                            <label>Fast delivery only</label>
                        </Box>

                        <Box>
                            <label>rating:</label>
                            <Rating rating={rating}  style={{ cursor: "pointer" }} onClick={(i) =>   productDispatch({
                                type:"FILTER_BY_RATING",
                                payload:i+1
                            })} />
                        </Box>
                        <Box w={"100%"}>
                            <Button w={"100%"}>Clear All</Button>
                        </Box>


                    </Box>
                 





                </Box>
                <Grid templateColumns='repeat(4,1fr)'   gridGap={"20px"}  border={"1px solid black"} w="80%"  >
                    {
                        prod.map((elem,index)=>{
                          return  <SinglePage elem={elem} key={elem.uuid}/>
                        })
                    }

</Grid>





            </Box>

        </>
    )
}

export default Filter