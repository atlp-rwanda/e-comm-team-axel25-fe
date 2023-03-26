import React from 'react';
import { mergeClassNames } from '../../lib';

type ButtonProps = {
  label: string;
  onClick: () => void;
  colorScheme:
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-accent'
    | 'btn-success'
    | 'btn-warning'
    | 'btn-danger'
    | 'btn-primary-outline'
    | 'btn-secondary-outline'
    | 'btn-accent-outline'
    | 'btn-success-outline'
    | 'btn-warning-outline'
    | 'btn-danger-outline'
    | 'disabled'
    | 'default';
  disabled?: boolean;
};

/**
 * Button component
 * @param {string} label - Button label
 * @param {string} colorScheme - Button color scheme
 * @param {string} variant - Button variant
 * @param {function} onClick - Button click handler
 * @param {boolean} disabled - Button disabled state
 * @returns {JSX.Element}
 * @example
 * <Button
 *  onClick={handleIncrement}
 * label="Increment"
 * colorScheme="primary"
 * variant="outline"
 * />
 * @example
 * <Button
 * onClick={() => {}}
 * label="Disabled"
 * colorScheme="disabled"
 * />
 */

export function Button({
  label,
  onClick,
  colorScheme,
  disabled,
}: ButtonProps): JSX.Element {
  const classObject = {
    [`btn ${colorScheme}`]: true,
    'btn-disabled': !!disabled,
  };

  const combinedClassNames = mergeClassNames(classObject);

  return (
    <button
      className={combinedClassNames}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};
