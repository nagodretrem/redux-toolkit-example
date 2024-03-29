import { createSlice } from "@reduxjs/toolkit";


export interface State  {
    items: Item[];
    totalQuantity: number;
    showCart: boolean;
    totalPrice: number
}
interface Item  {
    id: number;
    price: number;
    quantity: number;
    subTotalPrice: number;
    name: string;
}

const initialState: State = {
    items: [],
    totalQuantity: 0,
    showCart: false,
    totalPrice: 0
  };
  

const cartSlice = createSlice({
    name : 'cart',
    initialState,

    reducers:{
        replaceData(state, action){
            state.totalQuantity = action.payload.totalQuantity
            state.totalPrice = action.payload.totalPrice
            state.items = action.payload.items
        },
        addToCart(state: State, action: {payload: Item}){
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    subTotalPrice: newItem.price,
                    name: newItem.name
                })
            }else{
                existingItem.quantity++
                existingItem.subTotalPrice = existingItem.subTotalPrice + newItem.price
            }

            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)

        },
        removeFromCart(state: State, action: {payload: number}){
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
        
            if (existingItem) {
                state.totalQuantity--
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id)
                } else {
                    existingItem.quantity--
                    existingItem.subTotalPrice = existingItem.subTotalPrice - existingItem.price
                }
            } else {
                // Handle the scenario where the item with the specified id is not found
                console.error(`Item with id ${id} not found in state.items`)
            }

            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
        },
        setShowCart(state){
            state.showCart = !state.showCart
        }
    }
})




export const cartActions = cartSlice.actions
export default cartSlice