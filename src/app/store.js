import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../features/counter/mySlice";
export default configureStore({
  reducer: {
    counter: myReducer,
  },
});
