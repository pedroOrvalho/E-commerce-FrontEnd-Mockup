import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    productsList: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
