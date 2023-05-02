import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../../../assets/images';

export default function Logo() {
  return (
    <div className="hidden md:block">
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
    </div>
  );
}
