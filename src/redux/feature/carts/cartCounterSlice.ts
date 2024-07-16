import { createSlice } from "@reduxjs/toolkit"





type InitialState = {

    cartQuantity?: number
}

const initialState: InitialState = {
    cartQuantity: 0

}


const cartCounterslice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.cartQuantity! += 1
        },
        decrement: (state) => {
            state.cartQuantity! -= 1
        },
        resetCount: (state) => {
            state.cartQuantity! = 0
        },
    }
})


export const { increment, decrement, resetCount } = cartCounterslice.actions
export default cartCounterslice.reducer