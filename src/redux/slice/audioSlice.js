import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  audioData: "",
};

const audioSlice = createSlice({
  name: "audioData",
  initialState,
  reducers: {},
});

export const {} = audioSlice.actions;

export default audioSlice.reducer;
