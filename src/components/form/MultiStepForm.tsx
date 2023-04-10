import React, { useCallback } from 'react';
import { Button } from '../shared';

type TFormProps = {
  onCancel: () => void;
  onSubmit: () => void;
  actionLabel: string;

  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
};

export function MultiStepForm({
  onCancel,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: TFormProps) {
  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 md:h-auto"
    >
      <header className="relative flex items-center justify-center p-6 border-b rounded-t">
        <h1 className="text-lg font-bold tracking-normal text-center text-gray-800 dark:text-white sm:tracking-wide sm:text-2xl">
          {title}
        </h1>
      </header>
      <main className="relative flex-auto p-6">{body}</main>
      <footer className="flex flex-col gap-2 p-6">
        <div className="flex flex-col items-center w-full gap-4 md:flex-row ">
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
            onClick={handleSubmit} // remove this line after rebasing and add 'isSubmit' prop
            colorScheme="btn-secondary"
          />
        </div>
        {footer}
      </footer>
    </form>
  );
}

MultiStepForm.defaultProps = {
  title: '',
  body: <div />,
  footer: <footer />,
  disabled: false,
  secondaryAction: () => {
    // Do something
  },
  secondaryActionLabel: '',
};
