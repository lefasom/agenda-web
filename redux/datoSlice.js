import { createSlice } from "@reduxjs/toolkit";

export const datoSlice = createSlice({
    name: 'datos',
    initialState: {
        datos: [],
    },
    reducers: {
        currentDatos: (state, action) => {
            state.datos = action.payload
        }
    }
})

export const {
    currentDatos,
} = datoSlice.actions

export default datoSlice.reducer

