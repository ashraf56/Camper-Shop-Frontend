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
    totalprice?: number,
    cartQuantity?: number

}

type InitialState = {
    carts: Carts[],

}

const initialState: InitialState = {
    carts: [],

}


const cartslice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addItemstoCart: (state, action: PayloadAction<Carts>) => {
            const existingItem = state.carts.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.cartQuantity! += action.payload.cartQuantity!
            } else {
                state.carts.push({ ...action.payload });

            }
        },

        incrementItem: (state, action: PayloadAction<string>) => {
            const cartItem = state.carts.find(item => item.id === action.payload);

            cartItem!.cartQuantity! += 1

        },
        decrementItem: (state, action: PayloadAction<string>) => {
            const cartItem = state.carts.find(item => item.id === action.payload);

            cartItem!.cartQuantity! -= 1
            if (cartItem?.cartQuantity === 0) {
                state.carts! = state.carts.filter(item => item.id !== action.payload);
            }

        },
        // decrementItem: (state, action: PayloadAction<string>) => {
        //     const cartItem = state.carts.find(item => item.id === action.payload);
        //     if (cartItem) {
        //         state.totalItems! -= 1;
        //         if (state.totalItems! === 0) {
        //             state.carts = state.carts.filter(item => item.id !== action.payload);
        //         }
        //     }
        // },
    }
})



export const { addItemstoCart, incrementItem, decrementItem } = cartslice.actions
export default cartslice.reducer