import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: "all",
    },
    reducers: {
        currentCategory: (state, action) => {
            state.category = action.payload
        }
    }
})

export const {
    currentCategory,
} = categorySlice.actions

export default categorySlice.reducer

