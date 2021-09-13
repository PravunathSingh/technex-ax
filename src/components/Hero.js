import React from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/Button';
import { Slide } from 'react-awesome-reveal';
import heroGif from '../assests/hero/hero-section-gif-new01.gif';

const Hero = () => {
  return (
    <div className='grid gap-6 lg:grid-cols-2 font-rubik' id='services'>
      <div className='order-2 lg:order-1'>
        <div className='container mt-12 mb-20 lg:my-24 xl:my-48'>
          <Slide>
            <h1 className='text-3xl font-bold leading-relaxed tracking-wide text-center lg:leading-brand-spacing md:text-text-primary md:text-5xl lg:text-left'>
              Modern Problems Require
              <span className='text-btn-gradient-stop'> Modern Solutions</span>
            </h1>
          </Slide>

          <Slide>
            <p className='my-12 text-xl font-normal leading-relaxed text-center xxl:leading-loose xxl:text-4xl text-text-secondary lg:leading-relaxed lg:text-left lg:text-2xl'>
              Providing Next Gen Techonological Solutions That Will Take Your
              Business To The Moon & The Stars
            </p>
          </Slide>

          <Slide>
            <div className='mx-auto lg:mx-0'>
              <a href='#services'>
                <Button
                  className='w-full primary-btn lg:w-auto'
                  content='Get Started'
                />
              </a>
              <Link to='/contact'>
                <Button
                  className='w-full mt-10 ml-0 lg:ml-16 lg:mt-0 lg:w-auto secondary-btn'
                  content='Talk To Our Experts'
                />
              </Link>
            </div>
          </Slide>
        </div>
      </div>

      <div className='order-1 ml-auto lg:order-2'>
        <img src={heroGif} alt='' />
      </div>
    </div>
  );
};

export default Hero;
