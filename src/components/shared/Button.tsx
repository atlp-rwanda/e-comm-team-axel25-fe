import React from 'react';
import { mergeClassNames } from '../../lib';
import { ButtonProps } from '../../utils/types';

/**
 * Button component
 * @param {string} label - Button label
 * @param {string} colorScheme - Button color scheme
 * @param {string} variant - Button variant
 * @param {function} onClick - Button click handler
 * @param {boolean} disabled - Button disabled state
 * @param {boolean} isSubmit - Button type
 * @returns {JSX.Element}
 * @example
 * <Button
 *  onClick={handleIncrement}
 * label="Increment"
 * colorScheme="primary-outline"
 * />
 * @example
 * <Button
 * onClick={() => {}}
 * label="Disabled"
 * isSubmit
 * colorScheme="disabled"
 * />
 */

export function Button({
  label,
  onClick,
  isSubmit = false,
  colorScheme,
  disabled,
  className,
}: ButtonProps): JSX.Element {
  const classObject = {
    [`btn ${colorScheme}`]: true,
  };

  const combinedClassNames = mergeClassNames(classObject);

  return (
    <button
      className={`${combinedClassNames} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={isSubmit ? 'submit' : 'button'}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  className: '',
};
