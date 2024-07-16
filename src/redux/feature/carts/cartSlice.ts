import Carts from "@/page/Carts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Carts = {
    id: string
    name: string
    price: number
    stockQuantity: number
    rating?: string
    image?: string,
    category: string,
    cartQuantity?: number

}

type InitialState = {
    carts: Carts[],
    totalQuantoty: number
    totalPrice: number

}

const initialState: InitialState = {
    carts: [],
    totalQuantoty: 0,
    totalPrice: 0

}


const cartslice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addItemstoCart: (state, action: PayloadAction<Carts>) => {
            const existingItem = state.carts.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.cartQuantity! += action.payload.cartQuantity!
                state.totalPrice = existingItem.price * action.payload.cartQuantity!
            } else {
                state.carts.push({ ...action.payload });
                state.totalPrice = action.payload.cartQuantity! * action.payload.price!
            }

            state.totalQuantoty = state.carts.reduce((total, item) => total + item.cartQuantity!, 0)
            state.totalPrice = state.carts.reduce((total, item) => total + item.price * item.cartQuantity!, 0)
        },

        incrementItem: (state, action: PayloadAction<string>) => {
            const cartItem = state.carts.find(item => item.id === action.payload);

            cartItem!.cartQuantity! += 1
            state.totalQuantoty += 1
            state.totalPrice += cartItem!.price!
        },
        decrementItem: (state, action: PayloadAction<string>) => {
            const cartItem = state.carts.find(item => item.id === action.payload);

            cartItem!.cartQuantity! -= 1
            if (cartItem?.cartQuantity === 0) {
                state.carts! = state.carts.filter(item => item.id !== action.payload);
            }
            state.totalQuantoty -= 1
            state.totalPrice -= cartItem!.price!
        },
        removeCart:(state,action:PayloadAction<string>)=>{
            const cartItem = state.carts.find(item => item.id === action.payload);
            if (cartItem) {
                state.totalQuantoty -= cartItem!.cartQuantity! 
                state.totalPrice -= cartItem!.price! * cartItem!.cartQuantity!
                state.carts! = state.carts.filter(item => item.id !== action.payload);
                
            }
         
        }
  
    }
})



export const { addItemstoCart, incrementItem, decrementItem ,removeCart} = cartslice.actions
export default cartslice.reducer

