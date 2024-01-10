import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "./categorySlice"

const store = configureStore({
  reducer: {
    category: categorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
      },
      serializableCheck: false,
    }),

})
export default store