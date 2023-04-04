import React from 'react';
import { NavLinkFacade } from '../../lib';
import { logo } from '../../assets/images';

export default function Logo() {
  return (
    <div className="hidden md:block">
      <NavLinkFacade to="/">
        <img src={logo} alt="Logo" />
      </NavLinkFacade>
    </div>
  );
}
