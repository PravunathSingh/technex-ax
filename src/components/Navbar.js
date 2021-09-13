import React, { useState } from 'react';
import navBrand from '../assests/navbar/TechNex.png';
import { FaBars } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import { CurtainMenuPage } from './UI/CurtainMenuPage';

const Navbar = ({ toggleMobileMenu, active }) => {
  return (
    <div className='sticky top-0 z-50 opacity-100 bg-brand-bg'>
      <nav className='shadow-lg bg-brand-bg font-rubik'>
        <div className='container flex flex-wrap items-center justify-between py-3 xl:max-w-full md:py-4'>
          <a href='/'>
            <img src={navBrand} alt='' />
          </a>

          <div className='ml-auto text-4xl cursor-pointer text-text-secondary hover:text-text-primary lg:hidden'>
            <FaBars onClick={toggleMobileMenu} />
          </div>

          <div>
            <ul className='hidden list-none lg:flex'>
              <li className='py-2 ml-8 text-xl font-medium text-text-secondary-light hover:text-text-brand'>
                <NavLink to='/' activeClassName='activeLink' exact={true}>
                  Home
                </NavLink>
              </li>
              <li className='py-2 ml-8 text-xl font-medium text-text-secondary-light hover:text-text-brand'>
                <NavLink to='/about' activeClassName='activeLink'>
                  About
                </NavLink>
              </li>
              <li className='py-2 ml-8 text-xl font-medium text-text-secondary-light hover:text-text-brand'>
                <NavLink to='/services' activeClassName='activeLink'>
                  Services
                </NavLink>
              </li>
              <li
                className='py-2 ml-8 text-xl font-medium text-text-secondary-light hover:text-text-brand'
                activeClassName='activeLink'
              >
                <NavLink to='/our-work' activeClassName='activeLink'>
                  Our Work
                </NavLink>
              </li>
              <li
                className='py-2 ml-8 text-xl font-medium text-text-secondary-light hover:text-text-brand'
                activeClassName='active'
              >
                <NavLink to='/contact' activeClassName='activeLink'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <CurtainMenuPage open={open} /> */}
    </div>
  );
};

export default Navbar;
