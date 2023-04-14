import React from 'react';
import Stars from '../shared/Stars';
import { DataDropdown } from '../shared/DropDown';

type prop = {
    picture:JSX.Element;
    title: string,
    name: string,
    numberOfStars:number
}
function LastUpdade({
  picture, title, name, numberOfStars,
}: prop) {
  return (
    <div className="flex flex-column items-center gap-2 bg-white shadow-md w-fit p-1 dark:bg-dark dark:border dark:border-cyan-500">
      <div className="rounded-full p-2 dark:bg-white">{picture}</div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
        <p className="text-xs dark:text-white">Viewed by {name}</p>
      </div>
      <Stars num={numberOfStars} />
      <DataDropdown />
    </div>
  );
}
export default LastUpdade;
