import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllProductData = createAsyncThunk("getAllProductData", async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        // console.log("response=====>",response)
        return response?.data;
    } catch (error) {
        throw error
    }
})

export const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: [],
        error:null,
        loading:false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductData.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllProductData.fulfilled, (state, action) => {
                state.loading = false
                state.productList = action.payload
            })
            .addCase(getAllProductData.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer;
export const getProductList = (state) => state.products.productList;