import { baseApi } from "../api/api";


const productApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getproducts: build.query({
            query: () => ({
                url: '/products',
                method: "GET",
            }),
            providesTags:['products']

        }),
        getSingleProduct: build.query({
            query: (slug:string) => ({
                url: `/products/${slug}`,
                method: "GET",
            })
        }),
        createProduct: build.mutation({
            query: (data) => ({
                url: `/products/create-product`,
                method: "POST",
                body:data
            })
        }),
    }),
})



export const {useGetproductsQuery, useGetSingleProductQuery,useCreateProductMutation} = productApi