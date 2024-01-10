import { createSlice } from "@reduxjs/toolkit";

export const datoSlice = createSlice({
    name: 'datos',
    initialState: {
        datos: [],
    },
    reducers: {
        currentDatos: (state, action) => {
            state.datos = action.payload
        },
        deletedatos: (state, action) => {
            const id = action.payload
            const listNew = state.datos.filter((e) => { return (e.id != action.payload) })
            state.datos = listNew
        },
    }
})

export const {
    currentDatos,
    deletedatos
} = datoSlice.actions

export default datoSlice.reducer

