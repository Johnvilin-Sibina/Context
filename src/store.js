import { configureStore } from "@reduxjs/toolkit";
import { foodSlice } from "./reducers/foodList-reducer";

export const store = configureStore({
  reducer: {
    app: foodSlice.reducer,
  },
});
