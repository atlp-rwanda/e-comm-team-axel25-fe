import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="flex flex-col justify-between h-auto gap-5 px-1 py-3 mt-auto text-sm bg-white border-t-2 border-transparent dark:bg-dark dark:text-white dark:border-primary sm:flex-col sm:px-8 sm:gap-3 xs:text-xs sm:text-lg md:text-base">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-20">
        <div className="flex justify-center sm:justify-start">
          <NavLink
            to="/about"
            className="mr-6 hover:text-cyan-300 hover:scale-110"
          >
            About us
          </NavLink>
          <NavLink
            to="/pelp"
            className="mr-6 hover:text-cyan-300 hover:scale-110"
          >
            Help & contact
          </NavLink>
          <NavLink
            to="/policies"
            className="hover:text-cyan-300 hover:scale-110"
          >
            Policies
          </NavLink>
        </div>
        <div className="flex items-center justify-center footer__social sm:ml-auto hover:text-cyan-300 ">
          <span className="mr-4 ">Follow us:</span>

          <NavLink
            to="https://www.instagram.com/"
            className="mr-3 hover:scale-150"
          >
            <FaInstagram />
          </NavLink>
          <NavLink
            to="https://www.facebook.com/"
            className="mr-3 hover:scale-150"
          >
            <FaFacebook />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            className="mr-3 hover:scale-150"
          >
            <FaTwitter />
          </NavLink>
        </div>
      </div>
      <div className="text-center footer__copyight">
        <span className="h-1 text-gray-700 dark:text-gray-300">
          {' '}
          &copy; Team Cypher, {year}. All rights reserved.{' '}
        </span>
      </div>
    </div>
  );
}

export default Footer;
