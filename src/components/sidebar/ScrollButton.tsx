import React from 'react';
import { Button } from '../shared';

type ScrollButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

export function ScrollButton({ direction, onClick }: ScrollButtonProps) {
  return (
    <div className="hidden mx-2 shadow md:block">
      <Button
        colorScheme="btn-primary-outline"
        onClick={onClick}
        label={direction === 'left' ? '<' : '>'}
      />
    </div>
  );
}
