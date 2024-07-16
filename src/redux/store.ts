import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/api'
import cartSlice from './feature/carts/cartSlice'
import cartCounterSlice from './feature/carts/cartCounterSlice'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
         cartsState:cartSlice,
         counter:cartCounterSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch