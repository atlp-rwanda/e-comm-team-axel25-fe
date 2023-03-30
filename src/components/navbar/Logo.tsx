import React from 'react';
import { NavLinkFacade } from '../../lib';
import { logo } from '../../assets/images';

export default function Logo() {
  return (
    <div className="px-2 h-[80%] flex items-center border border-transparent">
      <NavLinkFacade to="/">
        <img src={logo} alt="Logo" />
      </NavLinkFacade>
    </div>
  );
}
