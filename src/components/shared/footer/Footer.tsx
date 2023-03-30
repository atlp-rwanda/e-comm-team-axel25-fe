import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { NavLinkFacade } from '../../../lib';

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="bg-white dark:bg-dark dark:text-white dark:border-primary border-t-2 border-transparent h-auto flex flex-col sm:flex-col justify-between sm:px-8 px-1 py-3 gap-5 sm:gap-3 mt-auto text-sm xs:text-xs sm:text-lg md:text-base">
      <div className="flex flex-col sm:flex-row sm:gap-20 gap-2">
        <div className="flex justify-center sm:justify-start">
          <NavLinkFacade
            to="/about"
            className="mr-6  hover:text-cyan-300 hover:scale-110"
          >
            About us
          </NavLinkFacade>
          <NavLinkFacade
            to="/pelp"
            className="mr-6 hover:text-cyan-300 hover:scale-110"
          >
            Help & contact
          </NavLinkFacade>
          <NavLinkFacade
            to="/policies"
            className="hover:text-cyan-300 hover:scale-110"
          >
            Policies
          </NavLinkFacade>
        </div>
        <div className="footer__social flex justify-center items-center sm:ml-auto hover:text-cyan-300 ">
          <span className="mr-4 ">Follow us:</span>

          <NavLinkFacade
            to="https://www.instagram.com/"
            className="mr-3 hover:scale-150"
          >
            <FaInstagram />

          </NavLinkFacade>
          <NavLinkFacade
            to="https://www.facebook.com/"
            className="mr-3 hover:scale-150"
          >
            <FaFacebook />

          </NavLinkFacade>
          <NavLinkFacade
            to="https://www.instagram.com/"
            className="mr-3 hover:scale-150"
          >
            <FaTwitter />
          </NavLinkFacade>
        </div>
      </div>
      <div className="footer__copyight text-center">
        <span className="text-gray-700 dark:text-gray-300 h-1"> &copy; Team Cypher, {year}. All rights reserved. </span>
      </div>
    </div>
  );
}

export default Footer;
