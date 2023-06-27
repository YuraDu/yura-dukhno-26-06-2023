import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameActive: false,
    start: false
};



const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setGameActive(state, action){
        state.gameActive = action.payload
    },
    setStart(state, action){
      state.start = action.payload
    }
  },
});

export const { setGameActive, setStart } = generalSlice.actions;

export default generalSlice.reducer;