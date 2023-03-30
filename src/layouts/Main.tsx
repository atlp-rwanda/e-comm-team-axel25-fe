import React, { ReactNode } from 'react';

type MainSectionProps = {
  children?: ReactNode;
};

export function MainSection({ children }: MainSectionProps) {
  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none top-24">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
      </div>
    </main>
  );
}

MainSection.defaultProps = {
  children: null,
};
