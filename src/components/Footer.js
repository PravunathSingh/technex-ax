import React from 'react';
import technexFooter from '../assests/footer/technextFooter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='font-rubik'>
      {/* <div className='w-full h-full'>
        <img src={technexFooter} alt='' className='w-full' />
      </div> */}
      <div className='container grid max-w-full py-4 bg-footer-brand md:grid-cols-3 place-content-center'>
        <div>
          <h1 className='my-16 text-4xl font-semibold text-center text-gray-100 cursor-pointer md:text-left lg:text-5xl'>
            TechNex
          </h1>
          <h5 className='mb-6 text-xl font-normal text-center text-gray-200 md:text-left lg:text-2xl'>
            Subscribe To Our Newsletter
          </h5>
          <form>
            <div>
              <input
                type='email'
                placeholder='Enter Your Email...'
                required
                className='w-full px-3 py-2 bg-gray-100 shadow-xl outline-none md:auto rounded-xl placeholder-text-primary ring-offset-text-primary focus:ring-4'
              />
            </div>

            <button
              type='submit'
              className='w-full px-3 py-2 mt-8 mb-20 text-lg font-medium md:auto primary-btn'
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h2 className='mt-6 mb-6 text-2xl font-medium text-center text-gray-100 md:mt-16 md:text-3xl'>
            Company
          </h2>

          <ul className='flex flex-wrap justify-between text-lg font-normal text-center text-gray-200 list-none md:flex-nowrap md:text-xl md:flex-col'>
            <Link to='/about'>
              <li className='mb-6 mr-3 cursor-pointer hover:text-gray-100'>
                About
              </li>
            </Link>
            <li className='mb-6 mr-3 cursor-pointer hover:text-gray-100'>
              Services
            </li>
            <Link to='/blogs'>
              <li className='mb-6 mr-3 cursor-pointer hover:text-gray-100'>
                Blog
              </li>
            </Link>
            <Link to='/careers'>
              <li className='mb-6 mr-3 cursor-pointer hover:text-gray-100'>
                Careers
              </li>
            </Link>
            <li className='cursor-pointer hover:text-gray-100'>Our Work</li>
          </ul>
        </div>

        <div>
          <h2 className='mt-16 mb-6 text-2xl font-medium text-center text-gray-100 md:text-3xl'>
            Contact
          </h2>
          <h5 className='mb-3 text-xl font-light text-center text-gray-200'>
            <i className='fa fa-phone'></i> (+91) 74399-86811
          </h5>
          <h5 className='text-xl font-light text-center text-gray-200'>
            <i className='fa fa-envelope'></i> admin@achievexsolutions.com
          </h5>

          <h2 className='mt-10 mb-6 text-2xl font-medium text-center text-gray-100 md:text-3xl'>
            <i className='fa fa-map-marker'></i> Address
          </h2>
          <h5 className='text-xl font-light text-center text-gray-200'>
            3rd Floor, 37, 1, GN Block Sector V, Bidhannagar, Kolkata-700091
            East
          </h5>
        </div>
      </div>

      <div className='w-full bg-footer-brand'>
        <h5 className='pt-4 pb-16 text-lg font-medium text-center text-gray-100 md:text-xl lg:text-2xl'>
          Made With ❤️ By AchieveX
        </h5>
      </div>
    </div>
  );
};

export default Footer;
