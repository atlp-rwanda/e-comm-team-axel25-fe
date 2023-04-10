import React, { useCallback } from 'react';
import { Button } from '../shared';

type CounterProps = {
  title: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
};

export function Counter({
  title, value, onChange, max,
}: CounterProps) {
  const onAdd = useCallback(() => {
    if (value === max) return;
    onChange(value + 1);
  }, [onChange, value, max]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium dark:text-white">{title}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Button
          label="-"
          colorScheme="btn-secondary-outline"
          onClick={onReduce}
        />

        <p className="text-xl font-light text-neutral-600 dark:text-neutral-300">
          {value}
        </p>

        <Button label="+" colorScheme="btn-secondary-outline" onClick={onAdd} />
      </div>
    </div>
  );
}

Counter.defaultProps = {
  max: 10,
};
