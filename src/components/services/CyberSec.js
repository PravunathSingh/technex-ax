import React from 'react';
import cybersec1 from '../../assests/servicesPage/cybersec.jfif';
import cybersec2 from '../../assests/servicesPage/cybersec.png';
import roundedgif from '../../assests/rounded-gif.gif';
import { Zoom } from 'react-awesome-reveal';

const CyberSec = () => {
  return (
    <div className='flex justify-between bg-scroll font-rubik'>
      <div className='relative w-full h-screen'>
        <div className='absolute left-1/3 top-1/2'>
          <img src={cybersec2} alt='' />
        </div>
        <img src={cybersec1} alt='' className='h-full' />
      </div>

      <div className='container mt-24'>
        <h1 className='mb-12 text-3xl font-bold leading-relaxed lg:text-4xl text-text-primary lg:leading-relaxed'>
          <span className='text-text-brand'>Security On The Web</span> Like
          Never Before
        </h1>
        <p className='mb-12 text-xl font-normal leading-relaxed text-text-secondary-light'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          reiciendis dicta architecto debitis consectetur dignissimos maiores id
          cumque vitae praesentium libero.
        </p>

        <div className='flex flex-wrap justify-between gap-4 lg:flex-nowrap md:gap-16'>
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

      <div className='mt-40 w-max'>
        <img src={roundedgif} alt='' />
      </div>
    </div>
  );
};

export default CyberSec;
