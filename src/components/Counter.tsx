import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement, reset } from '../reducers/index';
import { Button } from './ui';

function Counter() {
  const count = useSelector((state: RootState) => state.myReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h3>
        Update the count and edit src/App.tsx, state is preserved{' '}
        <span>
          <h1 className="text-9xl text-center">🤹🏽‍♀️</h1>
        </span>{' '}
      </h3>
      <p className="text-center my-5 text-lg">Count : {count}</p>

      <section className="grid grid-cols-1 gap-10 place-items-center m-5">
        <div
          className="grid grid-cols-2 place-items-center gap-5
        "
        >
          {/* Increment / Primary */}
          <Button
            onClick={handleIncrement}
            label="Increment"
            colorScheme="btn-primary"
          />
          <Button
            onClick={handleIncrement}
            label="Increment"
            colorScheme="btn-primary-outline"
          />

          {/* Decrement / Warning */}
          <Button
            onClick={handleDecrement}
            label="Decrement"
            colorScheme="btn-warning"
          />
          <Button
            onClick={handleDecrement}
            label="Decrement"
            colorScheme="btn-warning-outline"
          />

          {/* Reset / Danger */}
          <Button
            onClick={handleReset}
            label="Reset"
            colorScheme="btn-danger"
          />
          <Button
            onClick={handleReset}
            label="Reset"
            colorScheme="btn-danger-outline"
          />

          <Button
            onClick={() => {
              // do nothing
            }}
            label="Happy"
            colorScheme="btn-success"
          />
          <Button
            onClick={() => {
              // do nothing
            }}
            label="Happy"
            colorScheme="btn-success-outline"
          />

          {/* Secondary / Secondary */}
          <Button
            onClick={() => {
              // do nothing
            }}
            label="Secondary"
            colorScheme="btn-secondary"
          />

          <Button
            onClick={() => {
              // do nothing
            }}
            label="Secondary"
            colorScheme="btn-secondary-outline"
          />

          <Button
            onClick={() => {
              // do nothing
            }}
            label="Default"
            colorScheme="default"
          />
          <Button
            onClick={() => {
              // do nothing
            }}
            label="Default"
            colorScheme="default"
          />

          {/* Disabled / Disabled */}
          <Button
            onClick={() => {
              // do nothing
            }}
            label="Disabled"
            colorScheme="disabled"
            disabled
          />
        </div>
      </section>
    </div>
  );
}

export default Counter;
