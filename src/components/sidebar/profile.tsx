import React from 'react';

type Profileprops = {
    image:string | JSX.Element;
    name: string;
    role: string;
};

function Profile({ image, name, role }: Profileprops) {
  return (

    <div className=" flex flex-row items-center gap-2 w-full sm:w-full">
      <span>{image}</span>
      <div>
        <h2 className="text-sm font-bold">{name}</h2>
        <span className="text-sm font-light">{role}</span>
      </div>
    </div>

  );
}

export default Profile;
