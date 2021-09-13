import React from 'react';
import roundedGif from '../assests/rounded-gif.gif';
import { Slide, Zoom } from 'react-awesome-reveal';
import ContactIcons from './UI/ContactIcons';

const Contact = () => {
  return (
    <div className='mb-24 font-rubik md:my-36'>
      <h1 class='mb-10 text-4xl font-bold leading-relaxed text-center md:mb-32 2xl:text-5xl text-text-primary'>
        Connect With Us
      </h1>

      <Zoom>
        <div className='flex justify-around mb-10 lg:hidden'>
          <i className='cursor-pointer fab fa-facebook text-text-brand hover:rotate-360 fa-3x'></i>
          <i className='cursor-pointer fab fa-linkedin text-text-brand hover:rotate-360 fa-3x'></i>
          <i className='cursor-pointer fab fa-instagram text-text-brand hover:rotate-360 fa-3x'></i>
          <i className='cursor-pointer fab fa-twitter text-text-brand hover:rotate-360 fa-3x'></i>
        </div>
      </Zoom>

      <div className='grid px-8 place-content-center lg:grid-cols-3 sm:px-16 lg:px-0'>
        <ContactIcons />

        <Zoom>
          <div className='h-max'>
            <div className='p-8 border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
              <form>
                <div>
                  <h5 className='mb-3 text-lg font-medium text-text-secondary md:text-xl'>
                    <label>Name *</label>
                  </h5>
                  <input
                    type='text'
                    required
                    className='w-full px-4 py-2 mb-8 text-gray-800 placeholder-gray-600 bg-gray-100 shadow-md outline-none rounded-xl focus:shadow-xl focus:bg-gray-50 focus:ring-2 ring-offset-4 ring-text-brand'
                  />
                </div>

                <div>
                  <h5 className='mb-3 text-lg font-medium text-text-secondary md:text-xl'>
                    <label>Email *</label>
                  </h5>
                  <input
                    type='email'
                    required
                    className='w-full px-4 py-2 mb-8 text-gray-800 placeholder-gray-600 bg-gray-100 shadow-md outline-none rounded-xl focus:shadow-xl focus:bg-gray-50 focus:ring-2 ring-offset-4 ring-text-brand'
                  />
                </div>
                <div>
                  <h5 className='mb-3 text-lg font-medium text-text-secondary md:text-xl'>
                    <label>Message *</label>
                  </h5>
                  <textarea
                    cols='30'
                    rows='5'
                    required
                    className='w-full px-4 py-2 mb-8 text-gray-800 placeholder-gray-600 bg-gray-100 shadow-md outline-none rounded-xl focus:shadow-xl focus:bg-gray-50 focus:ring-2 ring-offset-4 ring-text-brand'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full p-2 mb-8 shadow-md primary-btn'
                >
                  Submit <i className='fa fa-paper-plane'></i>
                </button>
              </form>
            </div>
          </div>
        </Zoom>

        <div>
          <img src={roundedGif} alt='' className='hidden lg:block' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
