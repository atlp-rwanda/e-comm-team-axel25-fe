import React from 'react';

interface TPasswordInputProps {
  warning?: boolean;
  success?: boolean;
  label?: string;
  statusText?: string;
}
/**
 *
 * Password input form field component
 *
 * @param {boolean} warning - on validation failure
 * @param {boolean} success - on validation success
 * @param {string} statusText - validation status text
 * @param {string} label - input label
 *
 * @returns {JSX.Element}
 *
 * @example
 * <PasswordInput label="Password" />
 *
 */
export function PasswordInput({
  warning,
  success,
  statusText,
  label,
  ...props
}: TPasswordInputProps) {
  return (
    <div>
      <div className="relative h-10">
        <input
          type="password"
          name="password"
          {...props}
          className={`absolute px-3 border-2 rounded-sm py-2 outline-cyan-100 peer focus:ring-0 ${
            warning ? 'border-red-300 outline-red-300 ' : ''
          }  ${success ? 'border-cyan-300 outline-cyan-300' : ''}`}
          placeholder="  "
        />
        <label
          htmlFor="password"
          className="[&:not(peer-placeholder-shown)]:text-dark [&:not(peer-placeholder-shown)]:translate-x-2 [&:not(peer-placeholder-shown)]:-translate-y-3 [&:not(peer-placeholder-shown)]:bg-white  peer-focus:bg-white peer-placeholder-shown:bg-white  peer-focus:-translate-y-3 peer-placeholder-shown:translate-y-2  peer-focus:translate-x-2 peer-placeholder-shown:translate-x-1 px-2 text-gray-300 peer-focus:text-black transition rounded-sm absolute "
        >
          {label}
        </label>
        <span
          className={`absolute ml-2 translate-y-12 ${
            warning ? 'text-red-300 outline-red-300 ' : ''
          }  ${success ? 'text-cyan-300 outline-cyan-300' : ''}`}
        >
          {statusText}
        </span>
      </div>
    </div>
  );
}

PasswordInput.defaultProps = {
  success: false,
  warning: false,
  label: 'PasswordInput',
  statusText: undefined,
};
