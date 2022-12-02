import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const mainReducer = createSlice({
  name: "save date",
  initialState,
  reducers: {
    saveUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { saveUsers } = mainReducer.actions;

export default mainReducer.reducer;
