import Carts from "@/page/Carts"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Carts = {
    name: string
    price: number
    stockQuantity: number
    rating?: string
    image?: string,
    category: string,
    totalprice?: number,


}

type InitialState = {
    carts: Carts[],
    totalItem?: number
}

const initialState: InitialState = {
    carts: [],
    totalItem: 0
}


const cartslice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addItemstoCart: (state, actions: PayloadAction<Carts>) => {
            state.carts.push({ ...actions.payload })
        },
        increment: (state) => {
            state.totalItem! += 1

        },

        decrement: (state) => {
            state.totalItem! -= 1
        },
        incrementItem: (state, action: PayloadAction<string>) => {
            const cartItem = state.carts.find(item => item.name === action.payload);
            if (cartItem) {
                state.totalItem! += 1;

            }
        },
        decrementItem: (state, action: PayloadAction<string>) => {
            const cartItem = state.carts.find(item => item.name === action.payload);
            if (cartItem) {
                state.totalItem! -= 1;

            }
        },
    }
})



export const { addItemstoCart, increment, decrement, incrementItem, decrementItem } = cartslice.actions
export default cartslice.reducer