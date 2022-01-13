import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// a "slice" of the central data store for the counter state
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    // the following reducer functions will not mutate the original state
    increment(state, action) {
      // const amount = action.amount ?? 1;
      const amount = action.payload ?? 1; // payload is an automatically generated property from redux
      state.counter += amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// counterSlice.actions.increment(); // returns an action object

// exports counterActions which we can use to dispatch actions
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
