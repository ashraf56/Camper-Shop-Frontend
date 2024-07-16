
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://campers-shop-backend-three.vercel.app/api' }),
  tagTypes: ['products'],
  endpoints: () => ({}),
})