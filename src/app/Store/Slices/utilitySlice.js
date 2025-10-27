import { createSlice } from "@reduxjs/toolkit";

export const utilitySlice = createSlice({
  name: "utility",
  initialState: {
    login: false,
  },
  reducers: {
    onSetLoginTrue: (state) => {
      return {
        ...state,
        login: true,
      };
    },
  },
});

export const { onSetLoginTrue } = utilitySlice.actions;

export default utilitySlice.reducer;
