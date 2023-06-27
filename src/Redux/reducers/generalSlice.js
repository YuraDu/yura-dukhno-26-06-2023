import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gameActive: false
  
};



const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setGameActive(state, action){
        state.gameActive = action.payload
    }
  },
});

export const { setGameActive } = generalSlice.actions;

export default generalSlice.reducer;