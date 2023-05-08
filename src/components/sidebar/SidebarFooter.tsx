import React from 'react';

type Props = {
    data: { name: string; icon: React.ElementType }[];
};
export function SidebarFooter({ data }:Props) {
  return (
    <div className="text-m font-medium">
      {data.map((item) => (
        <div
          key={item.name}
          className="py-2 flex items-center md:cursor-pointer duration-300
            font-medium flex-row gap-3 dark:text-white dark:hover:text-primary hover:text-primary"
        >
          <item.icon size={23} className="" />
          {item.name}
        </div>
      ))}
    </div>
  );
}
