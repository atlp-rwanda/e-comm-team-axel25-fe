import {
  useCallback, useEffect, useRef, useState,
} from 'react';

export type ModalLogicParams = {
  onClose: () => void;
  onSubmit: () => void;
  secondaryAction?: () => void;
  isOpen?: boolean;
  disabled?: boolean;
};
export const useModalLogic = ({
  onClose,
  onSubmit,
  secondaryAction,
  isOpen = false,
  disabled = false,
}: ModalLogicParams) => {
  const [showModal, setShowModal] = useState(isOpen);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  useEffect(() => {
    setShowModal(isOpen);
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current
        && modalRef.current
        && !buttonRef.current.contains(e.target as Node)
        && !modalRef.current.contains(e.target as Node)
      ) {
        handleClose();
      }
    };

    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, [isOpen, handleClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  return {
    showModal,
    buttonRef,
    modalRef,
    handleClose,
    handleSubmit,
    handleSecondaryAction,
  };
};
