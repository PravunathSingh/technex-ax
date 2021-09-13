import React from 'react';
import aboutMission from '../../assests/aboutUsPage/aboutUsMission.png';
import aboutPattern from '../../assests/aboutUsPage/aboutUsPattern.png';
import aboutCircle from '../../assests/aboutUsPage/aboutUsCircle.png';
import aboutGradient from '../../assests/aboutUsPage/aboutUsCircleGradient.png';
import { Slide, Zoom } from 'react-awesome-reveal';

const AboutMission = () => {
  return (
    <div className='container grid gap-10 my-10 mb-28 md:mt-24 lg:gap-24 lg:mb-32 xl:mb-52 font-rubik lg:grid-cols-2'>
      <div className='flex items-center justify-center mx-auto mb-10 lg:hidden lg:mx-0 md:mb-11 lg:mb-16 w-max'>
        <div className='w-24 h-1 mr-4 bg-footer-brand rounded-xl'></div>
        <div className='text-3xl font-medium text-text-primary'>
          OUR MISSION
        </div>
      </div>
      <div>
        <Zoom>
          <div className='relative'>
            <div className='absolute hidden lg:block -z-100 -left-12 -top-16'>
              <img src={aboutPattern} alt='' />
            </div>
            <div className='absolute hidden lg:block -z-100 -right-14 -bottom-16'>
              <img src={aboutGradient} alt='' />
            </div>
            <div className='absolute hidden lg:block -z-100 -left-12 -bottom-10'>
              <img src={aboutCircle} alt='' />
            </div>
            <img src={aboutMission} alt='' className='w-full' />
          </div>
        </Zoom>
      </div>

      <div>
        <div className='items-center justify-center hidden mx-auto mb-10 lg:flex lg:mx-0 md:mb-11 lg:mb-16 w-max'>
          <div className='w-24 h-1 mr-4 bg-footer-brand rounded-xl'></div>
          <div className='text-3xl font-medium text-text-primary'>
            OUR MISSION
          </div>
        </div>

        <Slide>
          <div className='max-w-full lg:max-w-xl'>
            <h4 className='mb-10 text-3xl font-semibold leading-relaxed text-center lg:leading-relaxed lg:text-left text-text-brand lg:text-4xl'>
              We ensure top-notch quality in every domain.
            </h4>
          </div>
        </Slide>

        <Slide>
          <p className='mb-10 text-lg font-normal leading-relaxed text-center md:mb-12 lg:mb-16 lg:leading-relaxed lg:text-left text-text-secondary lg:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            animi, facere omnis voluptas alias laborum? Officiis excepturi
            architecto quas corrupti? facere
          </p>
        </Slide>

        <div className='flex flex-wrap justify-center gap-4 lg:flex-nowrap md:gap-16'>
          <Zoom>
            <div className='w-full px-6 py-2 border-b-4 sm:w-auto border-text-brand shadow-shadow-brand bg-opacity-70 rounded-t-xl rounded-b-xl backdrop-filter backdrop-blur-xl'>
              <div className='mx-auto w-max'>
                <i className='fa fa-user text-text-brand fa-2x'></i>
              </div>

              <h6 className='my-2 text-base font-semibold text-center lg:text-lg text-text-primary'>
                10
              </h6>
              <p className='font-medium text-center text-text-primary'>
                Happy Clients
              </p>
            </div>
          </Zoom>

          <Zoom>
            <div className='w-full px-4 py-2 border-b-4 sm:w-auto border-text-brand shadow-shadow-brand bg-opacity-70 rounded-t-xl rounded-b-xl backdrop-filter backdrop-blur-xl'>
              <div className='mx-auto w-max'>
                <i className='fas fa-handshake text-text-brand fa-2x'></i>
              </div>

              <h6 className='my-2 text-base font-semibold text-center lg:text-lg text-text-primary'>
                15
              </h6>
              <p className='font-medium text-center text-text-primary'>
                Projects Delivered
              </p>
            </div>
          </Zoom>

          <Zoom>
            <div className='w-full px-4 py-2 border-b-4 sm:w-auto border-text-brand shadow-shadow-brand bg-opacity-70 rounded-t-xl rounded-b-xl backdrop-filter backdrop-blur-xl'>
              <div className='mx-auto w-max'>
                <i className='fa fa-globe text-text-brand fa-2x'></i>
              </div>

              <h6 className='my-2 text-base font-semibold text-center lg:text-lg text-text-primary'>
                10
              </h6>
              <p className='font-medium text-center text-text-primary'>
                Countries Reached
              </p>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
