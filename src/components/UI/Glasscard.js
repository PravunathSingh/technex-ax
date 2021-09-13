import React from 'react';
import aboutusCircle from '../../assests/about-us/aboutUs-circle.png';

const Glasscard = () => {
  return (
    <div className='relative hidden w-max xl:block'>
      <img src={aboutusCircle} alt='' />

      <div className='absolute p-8 border border-gray-200 shadow-2xl bg-opacity-70 rounded-2xl top-12 left-32 bg-clip-padding backdrop-filter backdrop-blur-xl'>
        <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
          7 Industry Experts
        </p>
        <p className='text-lg font-normal text-center text-text-secondary-light'>
          Industry Experts You Can Trust
        </p>
      </div>

      <div className='absolute p-4 border border-gray-200 shadow-2xl bg-opacity-70 rounded-2xl top-72 left-48 bg-clip-padding backdrop-filter backdrop-blur-xl'>
        <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
          7 Industry Experts
        </p>
        <p className='text-lg font-normal text-center text-text-secondary-light'>
          Industry Experts You Can Trust
        </p>
      </div>

      <div className='absolute p-8 border border-gray-200 shadow-2xl bg-opacity-70 rounded-2xl bottom-40 left-32 bg-clip-padding backdrop-filter backdrop-blur-xl'>
        <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
          7 Industry Experts
        </p>
        <p className='text-lg font-normal text-center text-text-secondary-light'>
          Industry Experts You Can Trust
        </p>
      </div>
    </div>
  );
};

export default Glasscard;
