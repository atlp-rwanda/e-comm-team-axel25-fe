import React from 'react';
import { ModalLogicParams, useModalLogic } from '../../../hooks';
import { ModalHeader } from './ModalHeader';
import { ColorScheme, ModalFooter } from './ModalFooter';
import { mergeClassNames } from '../../../lib';

type ModalProps = {
  onClose: () => void;
  onSubmit: () => void;
  actionLabel: string;
  isOpen?: boolean;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  actionColorScheme: ColorScheme;
};

export function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
  actionColorScheme,
}: ModalProps) {
  const ModalLogicArgs: ModalLogicParams = {
    onClose,
    onSubmit,
    secondaryAction,
    isOpen,
    disabled,
  };

  const {
    modalRef,
    buttonRef,
    handleClose,
    handleSecondaryAction,
    handleSubmit,
    showModal,
  } = useModalLogic(ModalLogicArgs);

  const modalRefClassNames = mergeClassNames({
    'duration-300': true,
    'translate-y-0 opacity-100': showModal,
    'translate-y-full opacity-0': !showModal,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto">
        <div ref={modalRef} className={modalRefClassNames}>
          <div className="relative flex flex-col w-full h-full bg-white border-0 rounded-md shadow-lg outline-none dark:bg-dark dark:text-white lg:h-auto md:h-auto focus:outline-none">
            <ModalHeader
              title={title}
              buttonRef={buttonRef}
              handleClose={handleClose}
            />

            <main className="relative flex-auto p-6">{body}</main>

            <ModalFooter
              actionLabel={actionLabel}
              disabled={disabled}
              footer={footer}
              handleSecondaryAction={handleSecondaryAction}
              handleSubmit={handleSubmit}
              secondaryAction={secondaryAction}
              secondaryActionLabel={secondaryActionLabel}
              actionColorScheme={actionColorScheme}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  isOpen: false,
  title: '',
  body: <div>Body</div>,
  footer: <div />,
  disabled: false,
  secondaryAction: () => {
    // do something
  },
  secondaryActionLabel: '',
};
