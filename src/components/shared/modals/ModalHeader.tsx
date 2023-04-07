import React from 'react';
import { IoMdClose } from 'react-icons/io';

type ModalHeaderProps = {
  title?: string;
  handleClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
};

export function ModalHeader({
  title,
  handleClose,
  buttonRef,
}: ModalHeaderProps) {
  return (
    <header className="relative flex items-center justify-center p-6 border-b rounded-t">
      <button
        type="button"
        ref={buttonRef}
        onClick={handleClose}
        className="absolute p-1 transition border-0 hover:opacity-70 left-9"
      >
        <IoMdClose size={18} />
      </button>
      <h2 className="text-lg font-semibold">{title}</h2>
    </header>
  );
}

ModalHeader.defaultProps = {
  title: '',
};
