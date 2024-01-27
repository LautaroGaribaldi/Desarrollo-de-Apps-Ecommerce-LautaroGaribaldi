import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url_base } from "../firebase/database";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: url_base }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "categories.json",
        }),
        getProducts: builder.query({
            query: () => "products.json",
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        putProfilePicture: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profilePictures/${localId}.json`,
                method: "PUT",
                body: {
                    image: image,
                },
            }),
        }),
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json`,
        }),
    }),
});

export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductsByCategoryQuery, usePutProfilePictureMutation, useGetProfilePictureQuery } =
    shopApi;
