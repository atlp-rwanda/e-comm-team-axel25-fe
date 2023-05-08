import React, { useState } from 'react';
import { mergeClassNames } from '../../lib';

export type TAlert = {
  icon?: JSX.Element | null;
  message: string;
  closable?: boolean;
  colorScheme:
    | 'primary'
    | 'primary-outline'
    | 'secondary'
    | 'secondary-outline'
    | 'accent'
    | 'accent-outline'
    | 'success'
    | 'success-outline'
    | 'warning'
    | 'warning-outline'
    | 'danger'
    | 'danger-outline'
    | 'disabled'
    | 'default';
};
/**
 * Alert component
 * @param {string} className - add you styles
 * @param {string} message - display message
 * @param {boolean} closable - cross icon for removing
 * @param {JSX.Element} icon - icon
 * @return {JSX.Element | null}
 *
 * @example
 * <Alert
 * colorScheme="danger"
 * closable
 * icon={<FaBusAlt />}
 * message="missing your name"
 *    />
 *
 */
export function Alert({
  icon, message, closable, colorScheme,
}: TAlert) {
  const [visible, setVisible] = useState(true);
  const classList = {
    [`${colorScheme}`]: true,
  };
  return visible ? (
    <div
      className={`py-4 px-4  mx-4 rounded-md my-4 flex gap-2 items-center relative overflow-hidden ${mergeClassNames(classList)}`}
    >
      {icon}
      <span>{message}</span>
      {closable && (
        <button
          type="button"
          className="right-0 cursor-pointer hover:scale-110 absolute top-0 bottom-0  w-10 flex items-center justify-center close"
          onClick={() => {
            setVisible(false);
          }}
        >
          &times;
        </button>
      )}
    </div>
  ) : null;
}

Alert.defaultProps = {
  icon: null,
  closable: false,
};
