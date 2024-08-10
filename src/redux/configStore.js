import { configureStore } from "@reduxjs/toolkit";
import audioSlice from "./slice/audioSlice";

export default configureStore({
  reducer: {
    audioSlice,
  },
});
