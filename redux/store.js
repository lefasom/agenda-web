import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./imagesSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    images: imagesSlice,
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