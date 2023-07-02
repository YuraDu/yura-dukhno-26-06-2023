import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaders: [],
  timeRemaining:60,
  firstRow:[],
  secondRow:[],
  darkMode: false,
  pause: false,
  gameStatus: undefined,
  shuffle: false,
  falseStart: false,
  error: "",
  gameActive: false,
  retry: false,
  start: false,
  attempts: 6,
  attemptsPool:[],
  activeAttempt:false,
  selected: {name:'', container:''},
  alert: "",
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
    addLeader(state, action){
      state.leaders = [
        ...state.leaders,
        {
          nickname: action.payload,
          attempts: initialState.attempts - state.attempts,
          time: initialState.timeRemaining - state.timeRemaining,
        },
      ];
    },
    setNewGame(state) {
      state.timeRemaining = initialState.timeRemaining
      state.error = initialState.error
      state.pairs = initialState.pairs
      state.selected = initialState.selected
      state.attempts = initialState.attempts;
      state.start = initialState.start;
      state.attemptsPool = initialState.attemptsPool;
    },
    setTimeRemaining(state) {
      state.timeRemaining = state.timeRemaining - 1;
    },
    setFirstRow(state, action) {
      state.firstRow = action.payload;
    },
    setSecondRow(state, action) {
      state.secondRow = action.payload;
    },
    resetAttemptsPool(state) {
      state.attemptsPool = [];
    },
    setAttemptsPool(state, actions) {
      state.attemptsPool = [...state.attemptsPool, actions.payload];
    },
    setAlert(state, action) {
      state.alert = action.payload;
    },
    setDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    setPause(state, action) {
      state.pause = action.payload;
    },
    setGameStatus(state, action) {
      state.gameStatus = action.payload;
    },
    setShuffle(state) {
      state.shuffle = !state.shuffle;
    },
    setRetry(state) {
      state.retry = !state.retry;
    },
    addError(state, action) {
      state.error = action.payload;
    },
    setFalseStart(state, action) {
      state.falseStart = action.payload;
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
  addLeader,
  setNewGame,
  resetAttemptsPool,
  setTimeRemaining,
  swapInFirstRow,
  shuffleFirstRow,
  setFirstRow,
  setSecondRow,
  setAttemptsPool,
  setAlert,
  setDarkMode,
  setPause,
  setGameStatus,
  setShuffle,
  setRetry,
  addError,
  setFalseStart,
  setActiveAttempt,
  setGameActive,
  setStart,
  setAttempt,
  setSelected,
  setConcurrence,
} = generalSlice.actions;

export default generalSlice.reducer;