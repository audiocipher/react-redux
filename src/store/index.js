// using redux-toolkit to work with redux

import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  // configureStore will merge all these reducers into one big reducer
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

// The following code is for implementing a redux central data store without using the redux toolkit

// import { createStore } from 'redux';

// objects we return in the reducer funciton will overwrite the current state in the central data store
// they will not be merged with the existing state
// NEVER mutate the existing state in redux, ALWAYS return a new state
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     const amount = action.amount ?? 1;

//     return {
//       counter: state.counter + amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
