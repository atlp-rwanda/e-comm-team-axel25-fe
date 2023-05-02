import React from 'react';
import { Button } from '../Button';
import { ButtonProps } from '../../../utils/types';

export type ColorScheme = ButtonProps['colorScheme'];

type ModalFooterProps = {
  actionLabel: string;
  disabled?: boolean;
  footer?: React.ReactElement;
  handleSecondaryAction: () => void;
  handleSubmit: () => void;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  actionColorScheme: ColorScheme;
};
export function ModalFooter({
  actionLabel,
  handleSecondaryAction,
  handleSubmit,
  disabled,
  footer,
  secondaryAction,
  secondaryActionLabel,
  actionColorScheme,
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
          colorScheme={actionColorScheme}
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
