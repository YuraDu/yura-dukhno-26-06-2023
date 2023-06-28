import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameActive: false,
  start: false,
  attempts: 6,
  activeAttempt:false,
  selected: {name:'', container:''},
  pairs: [
    { concurrence: false, cardName: '' },
    { concurrence: false, cardName: '' },
    { concurrence: false, cardName: '' },
    { concurrence: false, cardName: '' },
    { concurrence: false, cardName: '' },
  ],
};



const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    resetState(state) {
      return initialState;
    },
    setActiveAttempt(state, action) {
      state.activeAttempt = action.payload;
    },
    setGameActive(state, action) {
      state.gameActive = action.payload;
    },
    setStart(state, action) {
      state.start = action.payload;
    },
    setAttempt(state) {
      state.attempts = state.attempts - 1;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
    setConcurrence(state, action) {
      const emptyPairIndex = state.pairs.findIndex(
        pair => pair.concurrence === false
      );
      const updatedPairs = state.pairs.map((pair, index) => {
        if (index === emptyPairIndex) {
          pair.cardName = action.payload;
          pair.concurrence = true;
        }
        return pair;
      });
      state.pairs = updatedPairs;
    },
  },
});

export const {
  resetState,
  setActiveAttempt,
  setGameActive,
  setStart,
  setAttempt,
  setSelected,
  setConcurrence,
} = generalSlice.actions;

export default generalSlice.reducer;