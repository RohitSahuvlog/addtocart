import React from 'react'
import { FaTrash } from 'react-icons/fa'
import {AiOutlineStar} from "react-icons/ai"

const Rating = ({rating,onClick,style}) => {
    // console.log(rating)
  return (
  <>
  {[...Array(5)].map((_,i)=>{
    <span key={i} onClick={()=>
        onClick(i)
    } style={style}>

        {rating >i ? (
            <FaTrash color="yellow" fontSize={"15px"} />
        ) : (<AiOutlineStar color="yellow" fontSize={"15px"}/>) }



    </span>
  })}
  
  
  
  
  
  
  </>
  )
}

export default Rating