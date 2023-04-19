import React from 'react';
import { Button } from '../Button';

type ModalFooterProps = {
  actionLabel: string;
  disabled?: boolean;
  footer?: React.ReactElement;
  handleSecondaryAction: () => void;
  handleSubmit: () => void;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
};
export function ModalFooter({
  actionLabel,
  handleSecondaryAction,
  handleSubmit,
  disabled,
  footer,
  secondaryAction,
  secondaryActionLabel,
}: ModalFooterProps) {
  return (
    <footer className="flex flex-col gap-2 p-6">
      <div className="flex flex-col items-center w-full gap-4 sm:flex-row ">
        {secondaryAction && secondaryActionLabel && (
          <Button
            disabled={disabled}
            label={secondaryActionLabel}
            onClick={handleSecondaryAction}
            colorScheme="btn-secondary-outline"
          />
        )}
        <Button
          disabled={disabled}
          label={actionLabel}
          onClick={handleSubmit}
          colorScheme="btn-secondary"
        />
      </div>
      {footer}
    </footer>
  );
}

ModalFooter.defaultProps = {
  disabled: false,
  secondaryAction: undefined,
  secondaryActionLabel: undefined,
  footer: undefined,
};
