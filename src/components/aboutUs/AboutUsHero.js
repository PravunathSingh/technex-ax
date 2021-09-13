import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsHero from '../../assests/aboutUsPage/abus.png';
import { Slide, Zoom } from 'react-awesome-reveal';

const AboutUsHero = () => {
  return (
    <div className='bg-brand-bg font-rubik'>
      <div className='grid gap-8 lg:grid-cols-2'>
        <div className='container grid order-2 mt-12 lg:mt-24 place-content-center lg:order-1'>
          <Zoom>
            <div className='flex items-center justify-center mx-auto mb-8 lg:mx-0 md:mb-11 lg:mb-16 w-max'>
              <div className='w-24 h-1 mr-4 bg-footer-brand rounded-xl'></div>
              <div className='text-lg font-normal md:text-xl text-text-secondary-light lg:text-2xl xl:text-3xl'>
                ABOUT US
              </div>
            </div>
          </Zoom>

          <Slide>
            <h1 className='text-3xl font-bold leading-relaxed text-center lg:text-left lg:text-4xl xl:text-5xl text-text-primary xl:leading-brand-spacing'>
              Lorem, ipsum dolor sit amet ipsum dolor sit
              <span className='text-text-brand'> elit Molestiae, rerum</span>
            </h1>
          </Slide>

          <Slide>
            <p className='my-12 text-xl font-normal leading-relaxed text-center xxl:leading-loose xxl:text-4xl text-text-secondary lg:leading-relaxed lg:text-left lg:text-2xl'>
              Increase your growth continuously with the X- factor we provide
              through{' '}
              <span className='text-text-brand'>next-gen solutions.</span>
            </p>
          </Slide>

          {/* <Zoom>
            
          </Zoom> */}
          <div className='mx-auto mb-28 lg:mx-0'>
            <Link to='/contact'>
              <button className='text-lg font-medium transition-all duration-300 outline-none hover:px-4 hover:py-2 rounded-xl text-btn-gradient-stop hover:text-text-primary hover:ring-offset-2 hover:ring-2 ring-btn-gradient-stop lg:text-xl active:outline-none'>
                Talk To Our Experts <i className='fa fa-arrow-right'></i>
              </button>
            </Link>
          </div>
        </div>

        <div className='order-1 ml-auto lg:order-2'>
          <img src={aboutUsHero} alt='' className='' />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
