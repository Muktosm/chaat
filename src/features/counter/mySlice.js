import { createSlice } from "@reduxjs/toolkit";

export const mySlice = createSlice({
  name: "counter",
  initialState: {
    value: null,
  },
  reducers: {
  
  currentUserSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { currentUserSlice } = mySlice.actions;

export default mySlice.reducer;
