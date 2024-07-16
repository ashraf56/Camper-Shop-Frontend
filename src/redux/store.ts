import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/api'
import cartSlice from './feature/carts/cartSlice'
import cartCounterSlice from './feature/carts/cartCounterSlice'
import { persistReducer, persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

    const configPersistor = {
        key: 'auth',
        storage
    }



    const persistedCart = persistReducer(configPersistor, cartSlice)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
         cartsState:persistedCart,
         counter:cartCounterSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
    }).concat(baseApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)