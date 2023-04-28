import React from 'react';
import {
  UseFormRegister,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form';
import { mergeClassNames } from '../../lib';

export type TSelectorFieldProps<T extends FieldValues> = {
  id: keyof T;
  options: string[];

  register?: UseFormRegister<T>;
  errors?: FieldErrors<T>;

  type?: string;
  disabled?: boolean;
  required?: boolean;
};

/**
 * SelectorField
 * @description A form selector field with label and error message
 * It can be used on any form, so long as the form is using react-hook-form
 * and the type definitions are inferred from zod schemas. See the Demo.tsx
 *
 * @param id The id of the selector field
 * @param label The label of the selector field
 * @param options The options of the selector field
 * @param register The register function from react-hook-form
 * @param errors The errors object from react-hook-form
 * @param type The type of the selector field
 * @param disabled Whether the selector field is disabled
 * @param icon The icon to be displayed on the left side of the selector field
 * @param required Whether the selector field is required
 *
 * @returns A form selector field with label and error message
 *
 * @example
 * <SelectorField<TLoginFieldValues>
 *  id="email"
 * label="Email"
 * options={["a", "b", "c"]}
 * type="email"
 * disabled={isLoading}
 * register={register}
 * errors={errors}
 * required
 * />
 *
 * @example
 * <SelectorField<TLoginFieldValues>
 * id="password"
 * label="Password"
 * options={["a", "b", "c"]}
 * type="password"
 * disabled={isLoading}
 * register={register}
 * errors={errors}
 * required
 * />
 */
export function SelectorField<T extends FieldValues>({
  id,
  options,
  register,
  errors,

  type = 'text',
  disabled = false,
  required = false,
}: TSelectorFieldProps<T>) {
  const registerFunction = register?.(id as Path<T>, {
    required,
    [type === 'number' ? 'valueAsNumber' : '']: true,
  });

  const {
    name, onBlur, onChange, ref,
  } = registerFunction || {};

  const selectorClassNames = mergeClassNames({
    'block w-full px-4 py-5 text-base text-gray-900 border border-cyan-300 rounded-lg backdrop-blur-md bg-cyan-400/5 focus:ring-cyan-500 focus:border-cyan-500  dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500':
      true,
    'border-red-300 outline-red-300': !!errors?.[id],
    'border-cyan-300 outline-cyan-300': !errors?.[id],
  });

  const statusTextClassNames = mergeClassNames({
    'mt-5': true,
    'text-red-400 outline-red-400': !!errors?.[id],
    'text-cyan-400 outline-cyan-400': !errors?.[id],
  });

  return (
    <div className="flex flex-col gap-2 my-8">
      <div className="relative h-10">
        <select
          id={id as string}
          disabled={disabled}
          className={selectorClassNames}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        >
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      {errors?.[id] && (
        <span className={statusTextClassNames}>
          {errors[id]?.message?.toString()}
        </span>
      )}
    </div>
  );
}

SelectorField.defaultProps = {
  type: 'text',
  disabled: false,
  required: false,
  register: undefined,
  errors: undefined,
};
