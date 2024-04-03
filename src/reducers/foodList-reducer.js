import { createSlice } from "@reduxjs/toolkit";

export const foodSlice = createSlice({
  name: "foodList",
  initialState: {
    food: [],
  },
  reducers: {
    setFood: (state, action) => {
      state.food = action.payload;   // [{},{},{}]
      return state;
    },
    addFood: (state, action) => {
    state.food = [...state.food,action.payload]; // [...,{}]
      return state;
    },
  },
});

export const { setFood, addFood } = foodSlice.actions;