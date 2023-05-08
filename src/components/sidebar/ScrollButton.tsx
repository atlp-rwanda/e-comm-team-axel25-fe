import React from 'react';

type ScrollButtonProps = {
  direction: 'left' | 'right';
  onClick: () => void;
};

export function ScrollButton({ direction, onClick }: ScrollButtonProps) {
  return (
    <div className="hidden mx-2 shadow md:block">
      <button
        onClick={onClick}
        className={`w-12 bg-transparent h-full absolute top-0 ${
          direction === 'left' ? 'left-20' : 'right-0'
        }`}
        type="button"
      >
        {' '}
      </button>
    </div>
  );
}
