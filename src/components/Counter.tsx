import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement } from '../reducers/index';

function Counter() {
  const count = useSelector((state: RootState) => state.myReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h3>
        Update the count and edit src/App.tsx, state is preserved{' '}
        <span>
          <h1>🤹🏽‍♀️</h1>
        </span>{' '}
      </h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Count : {count}</p>
    </div>
  );
}

export default Counter;
