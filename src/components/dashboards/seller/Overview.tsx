import React from 'react';

type OverviewProps = {
  title?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  value1?: number;
  value2?: number;
  value3?: number;
  //   value4?: number;
};

export function Overview({
  title,
  content1,
  content2,
  content3,
  content4,
  value1,
  value2,
  value3,
}: //   value4,
OverviewProps) {
  return (
    <div className="flex flex-col gap-3 p-3 text-xs text-black bg-white rounded-md shadow-lg dark:bg-dark2 dark:text-white">
      <strong>{title}</strong>
      <hr className="border-gray-300 " />
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-2">
          <p>{content1}</p>
          <p>{content2}</p>
          <p>{content3}</p>
        </div>
        <div className="flex flex-col text-gray-500 text-end gap-y-2">
          <p>${value1}</p>
          <p>${value2}</p>
          <p>${value3}</p>
        </div>
      </div>
      <hr className="border-gray-300" />
      <span className="text-center text-primary">{content4}</span>
    </div>
  );
}
Overview.defaultProps = {
  title: 'Payment summary',
  content1: 'Total balance',
  value1: 2234.67,
  content2: 'Amount available',
  value2: 123.45,
  content3: 'Amount held',
  value3: 0.0,
  content4: 'View payments summary',
  //   value4: 0,
};
