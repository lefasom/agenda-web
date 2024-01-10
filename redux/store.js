import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "./categorySlice"
import datoSlice from "./datoSlice"


const store = configureStore({
  reducer: {
    category: categorySlice,
    dato: datoSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
      },
      serializableCheck: false,
    }),

})
export default store