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
        getUserLocation: builder.query({
            query: (localId) => `locations/${localId}.json`,
        }),
        putUserLocation: builder.mutation({
            query: ({ location, localId }) => ({
                url: `locations/${localId}.json`,
                method: "PUT",
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                },
            }),
        }),
    }),
});

export const {
    useGetCategoriesQuery,
    useGetProductsQuery,
    useGetProductsByCategoryQuery,
    usePutProfilePictureMutation,
    useGetProfilePictureQuery,
    useGetUserLocationQuery,
    usePutUserLocationMutation,
} = shopApi;
