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
