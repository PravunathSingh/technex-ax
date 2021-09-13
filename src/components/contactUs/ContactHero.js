import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import contactGif from '../../assests/contactPage/contactGif.gif';
import ContactForm from '../UI/ContactForm';

const ContactHero = () => {
  return (
    <div className='font-rubik'>
      <div className='block mt-20 lg:hidden'>
        <div>
          <img
            src={contactGif}
            alt=''
            className='h-auto w-96 sm:w-120 md:w-md'
          />
        </div>
      </div>

      <div className='grid gap-8 lg:grid-cols-2'>
        <div className='container grid order-2 mt-12 mb:mt-16 lg:mt-20 xl:mt-32 place-content-center lg:order-1'>
          <Zoom>
            <div className='flex items-center justify-center mx-auto mb-8 lg:mx-0 md:mb-11 lg:mb-16 w-max'>
              <div className='w-24 h-1 mr-4 bg-footer-brand rounded-xl'></div>
              <div className='text-lg font-normal md:text-xl text-text-secondary-light lg:text-2xl xl:text-3xl'>
                STAY CONNECTED
              </div>
            </div>
          </Zoom>

          <Slide>
            <h1 className='text-3xl font-bold leading-relaxed text-center lg:text-left lg:text-4xl xl:text-5xl text-text-primary xl:leading-brand-spacing'>
              Get in Touch
            </h1>
          </Slide>

          <Slide>
            <p className='my-12 text-xl font-normal leading-relaxed text-center xxl:leading-loose xxl:text-4xl text-text-secondary lg:leading-relaxed lg:text-left lg:text-2xl'>
              Behind every successful brand, there is a secret helping hand
              operating in disguise. We can be yours.
            </p>
          </Slide>
        </div>

        <div className='container order-2 block lg:hidden'>
          <Zoom>
            <ContactForm />
          </Zoom>
        </div>

        <div className='container order-2 hidden ml-auto bg-no-repeat rounded-r-lg lg:block bg-contactBg'>
          <Zoom>
            <ContactForm />
          </Zoom>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div>
          <img src={contactGif} alt='' className='h-auto w-md 3xl:w-lg' />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
