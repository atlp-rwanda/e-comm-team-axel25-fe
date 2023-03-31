import React from 'react';
import { IconType } from 'react-icons';
import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import { mergeClassNames } from '../../lib';

export type TInputFieldProps<T extends FieldValues> = {
  id: keyof T;
  label: string;

  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;

  type?: string;
  disabled?: boolean;
  icon?: IconType;
  required?: boolean;
};

/**
 * InputField
 * @description A form input field with label and error message
 * It can be used on any form, so long as the form is using react-hook-form
 * and the type definitions are inferred from zod schemas. See the Demo.tsx
 *
 * @param id The id of the input field
 * @param label The label of the input field
 * @param register The register function from react-hook-form
 * @param errors The errors object from react-hook-form
 * @param type The type of the input field
 * @param disabled Whether the input field is disabled
 * @param icon The icon to be displayed on the left side of the input field
 * @param required Whether the input field is required
 *
 * @returns A form input field with label and error message
 *
 * @example
 * <InputField<TLoginFieldValues>
 *  id="email"
 * label="Email"
 * type="email"
 * disabled={isLoading}
 * register={register}
 * errors={errors}
 * icon={MdEmail}
 * required
 * />
 *
 * @example
 * <InputField<TLoginFieldValues>
 * id="password"
 * label="Password"
 * type="password"
 * disabled={isLoading}
 * register={register}
 * errors={errors}
 * icon={BsFillLockFill}
 * required
 * />
 */
export function InputField<T extends FieldValues>({
  id,
  label,
  register,
  errors,

  type = 'text',
  disabled = false,
  icon: Icon,
  required = false,
}: TInputFieldProps<T>) {
  const registerFunction = register?.(id as Path<T>, {
    required,
    [type === 'number' ? 'valueAsNumber' : '']: true,
  });

  const {
    name, onBlur, onChange, ref,
  } = registerFunction || {};

  const inputClassNames = mergeClassNames({
    'absolute w-full border dark:text-white rounded-lg py-4 rounded backdrop-blur-md bg-cyan-400/5':
      true,
    'pl-10': !!Icon,
    'pl-2': !Icon,
    'pr-3 outline-cyan-100 peer focus:ring-0': true,
    'border-red-300 outline-red-300': !!errors?.[id],
    'border-cyan-300 outline-cyan-300': !errors?.[id],
  });

  const labelClassNames = mergeClassNames({
    '&:not(peer-placeholder-shown)]:translate-x-2 peer-placeholder-shown:translate-y-3  [&:not(peer-placeholder-shown)]:-translate-y-1/2 peer-focus:-translate-y-4 peer-focus:text-sm peer-focus:translate-x-2 peer-placeholder-shown:translate-x-1 px-2 text-black dark:text-white transition absolute backdrop-blur-md mt-1':
      true,
    'ml-10': !!Icon,
    'text-red-400': !!errors?.[id],
  });

  const statusTextClassNames = mergeClassNames({
    'mt-5': true,
    'text-red-400 outline-red-400': !!errors?.[id],
    'text-cyan-400 outline-cyan-400': !errors?.[id],
  });

  return (
    <div className="flex flex-col gap-2 my-8">
      <div className="relative h-10">
        {Icon && (
          <div className="absolute left-0 z-20 ml-2 -translate-y-1/2 top-7">
            <Icon size={20} className="dark:text-cyan-400" />
          </div>
        )}

        <input
          id={id as string}
          disabled={disabled}
          placeholder=" "
          type={type}
          className={inputClassNames}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
        <label htmlFor={id as string} className={labelClassNames}>
          {label}
        </label>
      </div>
      {errors?.[id] && (
        <span className={statusTextClassNames}>
          {errors[id]?.message?.toString()}
        </span>
      )}
    </div>
  );
}

InputField.defaultProps = {
  type: 'text',
  disabled: false,
  icon: undefined,
  required: false,
  register: undefined,
  errors: undefined,
};
