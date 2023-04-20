import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface IFormInputProps {
  warning?: boolean;
  success?: boolean;
  statusText?: string;
  icon?: JSX.Element;
  label: string;
  register?: UseFormRegister<any>;
  type?: string;
  disabled?: boolean;
  id: string;
}

/**
 *
 * Email input form field component
 *
 * @param {boolean} warning - on validation failure
 * @param {boolean} success - on validation success
 * @param {string} statusText - validation status text
 * @param {string} label - input label
 *
 * @returns {JSX.Element}
 *
 * @example
 * <FormInput success />
 *
 */
function FormInput({
  warning,
  success,
  statusText,
  label,
  type,
  icon,
  register,
  disabled,
  id,
}: IFormInputProps) {
  return (
    <div className="my-8">
      <div className="relative h-10">
        {icon && (
          <span className="absolute top-1/2 left-0 z-20 ml-2 -translate-y-1/2">
            {icon}
          </span>
        )}

        <input
          type={type}
          id={id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register}
          disabled={disabled}
          className={`absolute  border-2 rounded-sm py-2 ${
            icon ? 'pl-8' : 'pl-2'
          } pr-3 outline-cyan-100 peer focus:ring-0 ${
            warning ? 'border-red-300 outline-red-300 ' : ''
          }  ${success ? 'border-cyan-300 outline-cyan-300' : ''}`}
          placeholder="  "
        />
        <label
          htmlFor={id}
          className={`&:not(peer-placeholder-shown)]:translate-x-2 peer-placeholder-shown:translate-y-2  [&:not(peer-placeholder-shown)]:-translate-y-1/2 [&:not(peer-placeholder-shown)]:bg-white  peer-focus:bg-white peer-placeholder-shown:bg-white  peer-focus:-translate-y-3 peer-focus:text-sm  peer-focus:translate-x-2 peer-placeholder-shown:translate-x-1 px-2 text-black transition rounded-sm absolute ${
            icon ? 'ml-4' : ''
          } `}
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

export default FormInput;

FormInput.defaultProps = {
  success: false,
  warning: false,
  statusText: undefined,
  icon: null,
  type: 'text',
  disabled: false,
  register: null,
};
