// useSelector allows us to select a part of the state managed by the store
// useDispatch gives us a dispatch function which we can call to dispatch an action to the central data store
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

import styles from './Counter.module.css';

const Counter = () => {
  // useSelector takes in a function that determines what data we want to extract from the central data store
  // automatically sets up a subscription to the central data store for this component
  // changes to the central data store will cause the Counter component to be re-executed
  // the subscription is automatically cleared when the component is un-mounted
  const getCounter = (state) => state.counter.counter;
  const counter = useSelector(getCounter);
  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const handleIncrement = (event, amount) => {
    // dispatch({ type: 'increment', amount }); // old way of dispatching an action
    dispatch(counterActions.increment(amount));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleToggleCounter = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={styles.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={(event) => handleIncrement(event, 5)}>
          Increment by 5
        </button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class-based component implementation

// import { Component } from 'react';
// import { connect } from 'react-redux';

// class Counter extends Component {
//   handleIncrement() {
//     this.props.increment();
//   }

//   handleDecrement() {
//     this.props.decrement();
//   }

//   handleToggleCounter() {}

//   render() {
//     return (
//       <main className={styles.counter}>
//         <h1>Redux Counter</h1>
//         <div className={styles.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//           <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.handleToggleCounter}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
