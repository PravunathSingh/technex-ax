import React from 'react';
import roundedGif from '../assests/rounded-gif.gif';
import { Slide, Zoom } from 'react-awesome-reveal';
import Button from './UI/Button';
import Glasscard from './UI/Glasscard';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='my-20 lg:my-36 font-rubik'>
      <Slide>
        <h4 className='mb-12 text-2xl font-medium text-center lg:text-2xl xl:text-4xl text-text-secondary-light lg:mb-24'>
          WHO WE ARE ?
        </h4>
      </Slide>

      <div className='grid gap-24 xl:grid-cols-3'>
        <Glasscard />

        <div className='max-w-full px-8'>
          <Zoom>
            <h1 className='mb-8 text-3xl font-bold leading-relaxed text-center xl:text-left md:mb-10 lg:mb-16 xl:leading-brand-spacing xl:text-5xl text-text-primary'>
              We Are The Best At
              <span className='text-text-brand'> What We Do</span>
            </h1>
          </Zoom>

          <Zoom>
            <p className='mb-12 text-lg font-normal leading-relaxed text-center text-gray-500 lg:text-left lg:leading-relaxed lg:text-xl xl:text-2xl lg:mb-20'>
              A passionate and motivated group of individuals who are commited
              to providing the best solutions to our clients A passionate and
              motivated group of individuals who are commited to providing the
              best solutions to our clients A passionate and motivated group of
              individuals who are commited to providing
            </p>
          </Zoom>

          <Slide>
            <div className='block p-8 mb-8 transition-all duration-200 border border-gray-300 shadow-shadow-brand xl:hidden bg-opacity-70 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl'>
              <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
                7 Industry Experts
              </p>
              <p className='text-lg font-normal text-center text-text-secondary-light'>
                Industry Experts You Can Trust
              </p>
            </div>
          </Slide>

          <Slide>
            <div className='block p-8 mb-8 transition-all duration-200 border border-gray-300 shadow-shadow-brand xl:hidden bg-opacity-70 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl'>
              <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
                7 Industry Experts
              </p>
              <p className='text-lg font-normal text-center text-text-secondary-light'>
                Industry Experts You Can Trust
              </p>
            </div>
          </Slide>

          <Slide>
            <div className='block p-8 mb-8 transition-all duration-200 border border-gray-300 shadow-shadow-brand xl:hidden bg-opacity-70 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-xl'>
              <p className='mb-6 text-2xl font-medium text-center text-gray-700'>
                7 Industry Experts
              </p>
              <p className='text-lg font-normal text-center text-text-secondary-light'>
                Industry Experts You Can Trust
              </p>
            </div>
          </Slide>

          <Zoom>
            <div className='max-w-sm px-8 mx-auto lg:px-0'>
              <Link to='/about'>
                <Button
                  className='w-full my-8 md:my-0 primary-btn '
                  content='Know More'
                />
              </Link>
            </div>
          </Zoom>
        </div>

        <div className='hidden xl:block'>
          <img src={roundedGif} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
