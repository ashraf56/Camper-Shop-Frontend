import { baseApi } from "../api/api";


const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getproducts: build.query({
            query: () => ({
                url: '/products',
                method: "GET",
            })
        }),
        getSingleProduct: build.query({
            query: (slug:string) => ({
                url: `/products/${slug}`,
                method: "GET",
            })
        })
    }),
})



export const {useGetproductsQuery, useGetSingleProductQuery} = productApi