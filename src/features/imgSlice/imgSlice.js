import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiCall from './apiCall'

const initialState = {
    images: [],
    status: 'null'
}
export const apiGetPhotos = createAsyncThunk(
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
        .addCase(apiGetPhotos.pending, state => {
            state.status = 'loading'
        })
        .addCase(apiGetPhotos.fulfilled, (state,action) =>{
            state.status = 'fulfilled'
            state.images = action.payload
        })
        .addCase(apiGetPhotos.rejected, state =>{
            state.status = 'error'
        })
    }
})

export const selectImage = (state) => state.apiCall.images
export const selectStatusImage = (state) => state.apiCall.status
export default imgSlice.reducer