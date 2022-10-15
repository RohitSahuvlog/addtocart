export const reducer = (state,action)=>{
   
    switch(action.type){

case "Add_to_Card":{
return {
    ...state,
    cart:[...state.cart,{...action.payload,qty:1}],

}
}
case "Remove_From_Card":{
    return {
        ...state,
        cart:state.cart.filter(c=>c.uuid!==action.payload.uuid)
    }
    }
    case "CHANGE_CART_QTY":{
        console.log(action.payload,state.cart)
        return {
            ...state,
              cart:state.cart.filter((c)=>{
               return  console.log(c)
                
                // (+(c.uuid) === +(action.payload.uuid)) ? (c.qty === action.payload.qty) :c.qty)
        })}
        }
        default:
            return state
    }
}

export const productReducer=(state,action)=>{
    console.log(action.payload)
    switch(action.type){
        case "SORT_BY_PRICE":
            return {...state,sort:action.payload } 
            case "FILTER_BY_STOCK":
                return {...state,byStock:!action.byStock } 
                case "FILTER_BY_DELIVERY":
                    return {...state,byFastDelivery:!state.byFastDelivery } 
                    case "FILTER_BY_RATING":
                        return {...state,byRating:action.payload } 
                        case "FILTER_BY_SEARCH":
                            return {...state,searchQuery:action.payload } 
                            case "CLEAR_ALL":
                                return {
                                    byStock:false,
                                    byFastDeleivery:false,
                                    byrating:0,
                                    searchQuery:""

                                 } 
        default :
        return state
    }
}