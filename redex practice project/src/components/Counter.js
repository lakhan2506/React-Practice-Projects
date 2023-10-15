import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispach = useDispatch();
  const counter = useSelector(state=> state.counter)
  const show = useSelector(state =>state.showCounter)

  const incrementHandler =() =>{
    dispach(counterActions.increment());
  }
  const increaseHandler =() =>{
    dispach(counterActions.increase(5));
  }
  const decrementHandler=()=>{
    dispach(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    dispach(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter }</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
