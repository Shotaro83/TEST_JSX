import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    dicrementByAmount:(state, action) => {
        state.count -= action.payload
    }
  },
  //自動で同じ名前のAction Creatorが作成される。
});

export const { increment, decrement, incrementByAmount, dicrementByAmount } = counterSlice.actions; //actionCreatorのこと

export default counterSlice.reducer;