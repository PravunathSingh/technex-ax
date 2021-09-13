import React from 'react';
import roundedGif from '../../assests/rounded-gif.gif';
import { Slide, Zoom } from 'react-awesome-reveal';
import Glasscard from '../UI/Glasscard';

const Perks = () => {
  return (
    <div className='mb-20 font-rubik'>
      <div className='grid xl:grid-cols-3'>
        <Slide>
          <Glasscard />
        </Slide>

        <div className='grid px-8 md:px-12 lg:px-16 place-content-center'>
          <Zoom>
            <div className='flex flex-wrap items-center justify-center mx-auto mb-10 md:flex-nowrap lg:mx-0 md:mb-11 lg:mb-16 w-max'>
              <div className='hidden w-24 h-1 mr-4 sm:block bg-footer-brand rounded-xl'></div>
              <div className='text-2xl font-medium text-text-primary'>
                OUR PERKS
              </div>
            </div>
          </Zoom>

          <Zoom>
            <h1 className='mb-10 text-2xl font-semibold leading-relaxed text-center lg:mb-14 lg:leading-relaxed md:text-3xl lg:text-4xl lg:text-left text-text-primary'>
              Lorem ipsum dolor sit amet, consectetur{' '}
              <span className='text-text-brand'>
                adipiscing elit ut aliquam
              </span>
            </h1>
          </Zoom>

          <Zoom>
            <p className='mb-10 text-lg font-normal leading-relaxed text-center md:mb-12 lg:mb-16 lg:leading-relaxed lg:text-left text-text-secondary lg:text-xl'>
              The idea of high availability architecture has taken root where
              your companies have a core need to keep your organization running
              smoothly and in a secure manner.
            </p>
          </Zoom>
        </div>

        <div className='block px-8 lg:hidden md:px-12 lg:px-16'>
          <Slide>
            <div className='block p-8 mb-8 transition-all duration-200 border border-gray-300 shadow-shadow-brand lg:hidden bg-opacity-70 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl'>
              <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
                Lorem ipsum dolor sit.
              </p>
              <p className='text-lg font-normal text-center text-text-secondary-light'>
                Lorem ipsum dolor sit.
              </p>
            </div>
          </Slide>

          <Slide>
            <div className='block p-8 mb-8 transition-all duration-200 border border-gray-300 shadow-shadow-brand lg:hidden bg-opacity-70 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl'>
              <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
                Lorem ipsum dolor sit amet.
              </p>
              <p className='text-lg font-normal text-center text-text-secondary-light'>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </Slide>

          <Slide>
            <div className='block p-8 mb-8 transition-all duration-200 border border-gray-300 shadow-shadow-brand lg:hidden bg-opacity-70 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl'>
              <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
                Lorem ipsum dolor sit amet.
              </p>
              <p className='text-lg font-normal text-center text-text-secondary-light'>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </Slide>
        </div>

        <div className='relative hidden lg:block'>
          <img src={roundedGif} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Perks;
