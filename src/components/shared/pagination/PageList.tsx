import React from 'react';

type PageListProps = {
    data: string[];
  }

function PageList({ data }: PageListProps) {
  return (
    <div>
      {data.map((item: string) => (
        <div className="dark:text-white flex flex-column justify-center " key={item}>
          {item}
        </div>
      ))}
    </div>
  );
}
export default PageList;
