import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiCall from './apiCall'

const initialState = {
    images: [],
    status: 'null'
}

export const apiPhotos = createAsyncThunk(
    'search/apiCall',
    async(query) => {
        return await apiCall(query)
    }

)
export const imgSlice = createSlice({
    name:"photos",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(apiPhotos.pending, state => {
            state.status = 'loading'
        })
        .addCase(apiPhotos.fulfilled, (state,action) =>{
            state.status = 'fulfilled'
            state.images = action.payload
        })
        .addCase(apiPhotos.rejected, state =>{
            state.status = 'error'
        })
    }
})