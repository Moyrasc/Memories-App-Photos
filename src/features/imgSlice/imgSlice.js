import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import getPhotos from './apiCall'

const initialState = {
    results: [],
    status: 'null',
    term: ''
}
export const apiGetPhotos = createAsyncThunk(
    'search/getPhotos',
    async(query) => {
        return await getPhotos(query)
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
            state.results = action.payload
        })
        .addCase(apiGetPhotos.rejected, state =>{
            state.status = 'error'
        })
    }
})

export const selectImage = (state) => state.imgSlice.results
export const selectStatusImage = (state) => state.apiGetPhotos.status
export default imgSlice.reducer