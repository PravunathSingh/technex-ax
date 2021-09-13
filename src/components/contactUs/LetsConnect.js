import React from 'react';
import ContactIcons from '../UI/ContactIcons';
import map from '../../assests/contactPage/map.png';
import { Slide, Zoom } from 'react-awesome-reveal';

const LetsConnect = () => {
  return (
    <div className='font-rubik'>
      <Slide>
        <h1 className='mt-32 text-3xl font-semibold text-center lg:mt-0 lg:text-4xl xl:text-5xl text-text-brand'>
          Let's Connect
        </h1>
      </Slide>

      <Slide>
        <div className='container max-w-5xl mx-auto my-12 md:my-20 lg:my-28'>
          <p className='text-xl font-normal leading-relaxed text-center md:text-left text-text-secondary md:leading-relaxed lg:text-2xl'>
            Explore our social media channels to read about TechNeX’s latest
            insights, our unique culture and our differentiated approach to
            serving clients and{' '}
            <span className='text-text-brand'>achieving enduring results.</span>
          </p>
        </div>
      </Slide>

      <Zoom>
        <div className='flex justify-around mb-16 lg:hidden'>
          <i className='cursor-pointer fab fa-facebook text-text-brand hover:rotate-360 fa-3x'></i>
          <i className='cursor-pointer fab fa-linkedin text-text-brand hover:rotate-360 fa-3x'></i>
          <i className='cursor-pointer fab fa-instagram text-text-brand hover:rotate-360 fa-3x'></i>
          <i className='cursor-pointer fab fa-twitter text-text-brand hover:rotate-360 fa-3x'></i>
        </div>
      </Zoom>

      <div className='container max-w-5xl mx-auto mb-28 lg:mb-0'>
        <div className='grid gap-12 md:grid-cols-2'>
          <div>
            <Slide>
              <h6 className='mb-6 text-3xl font-medium text-center md:text-left text-text-primary'>
                Contact
              </h6>
            </Slide>
            <Zoom>
              <p className='mb-4 text-xl font-normal text-center md:text-left text-text-secondary'>
                <i className='fa fa-phone'></i> +91 74399-86811
              </p>
              <p className='mb-4 text-xl font-normal text-center md:text-left text-text-secondary'>
                <i className='fa fa-envelope'></i> admin@achievexsolutions.com
              </p>
            </Zoom>
          </div>

          <div>
            <Slide>
              <h6 className='mb-6 text-3xl font-medium text-center md:text-left text-text-primary'>
                <i className='fa fa-map-marker'></i> Address
              </h6>
            </Slide>

            <Zoom>
              <p className='mb-4 text-xl font-normal text-center md:text-left text-text-secondary'>
                3rd Floor, 37, 1, GN Block Sector V, Bidhannagar, Kolkata-700091
                East
              </p>
            </Zoom>
          </div>
        </div>
      </div>

      <div className='container block col-span-2 mb-28 lg:hidden h-max'>
        <Zoom>
          <div className='relative'>
            <div className='absolute top-0 left-0 grid w-full h-full transition-all duration-300 opacity-0 cursor-pointer place-content-center bg-text-primary hover:opacity-70'>
              <h4 className='text-2xl font-medium text-center lg:text-3xl text-brand-bg'>
                Click To See Directions
              </h4>
            </div>
            <img src={map} alt='' />
          </div>
        </Zoom>
      </div>

      <div className='hidden lg:grid lg:grid-cols-3 place-content-center my-28'>
        <div className=''>
          <ContactIcons />
        </div>
        <Zoom>
          <div className='container col-span-2 h-max'>
            <div className='relative w-max'>
              <div className='absolute top-0 left-0 grid w-full h-full transition-all duration-300 opacity-0 cursor-pointer place-content-center bg-text-primary hover:opacity-70'>
                <h4 className='text-2xl font-medium text-center lg:text-3xl text-brand-bg'>
                  Click To See Directions
                </h4>
              </div>
              <img src={map} alt='' />
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default LetsConnect;
