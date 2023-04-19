import React from 'react';

type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function Heading({ title, center, subtitle }: HeadingProps) {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
      <h4 className="mt-2 font-light text-neutral-500 dark:text-neutral-400">
        {subtitle}
      </h4>
    </div>
  );
}

Heading.defaultProps = {
  center: false,
  subtitle: '',
};
