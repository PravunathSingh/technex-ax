import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import iot from '../assests/services/icons/iot.png';
import chatbot from '../assests/services/icons/chatbot.png';
import cyber from '../assests/services/icons/cyber.png';
import blockchain from '../assests/services/icons/blockchain.png';
import cloudComputing from '../assests/services/icons/cloud-computing.png';
import ml from '../assests/services/icons/ML.png';
import { Slide, Zoom } from 'react-awesome-reveal';
import { AccordionPage } from './UI/AccordionPage';

const Services = () => {
  return (
    <div className='container mb-20 lg:mb-48 font-rubik'>
      <div className='block lg:hidden'>
        <Slide>
          <h1 className='mb-8 text-4xl font-bold leading-relaxed text-center md:mb-10 2xl:text-5xl text-text-primary'>
            What We Do ?
          </h1>
        </Slide>

        <Slide>
          <p className='mb-20 text-2xl font-medium text-center md:mb-36 lg:4xl text-text-secondary'>
            Providing End to End Services{' '}
            <span className='text-text-brand'>
              In Cutting Edge Technologies
            </span>
          </p>
        </Slide>
      </div>

      <Zoom>
        <div className='relative hidden lg:block'>
          <div className='absolute grid w-32 h-32 rounded-full top-1/3 left-80 xl:left-105 2xl:left-services place-content-center 3xl:left-150 bg-brand-shape lg:w-64 lg:h-64'>
            <h1 className='mb-4 text-2xl font-bold leading-relaxed text-center md:mb-6 2xl:text-3xl text-text-primary'>
              What We Do ?
            </h1>

            <p className='text-lg font-medium text-center lg:xl text-text-secondary'>
              Providing End to End Services{' '}
              <span className='text-text-brand'>
                In Cutting Edge Technologies
              </span>
            </p>
          </div>
          <div className='relative hidden mx-auto bg-transparent border-2 rounded-full lg:flex lg:items-center lg:justify-center animate-spin-slow w-96 h-96 lg:w-lg lg:h-lg border-text-brand'>
            <Link to='/services'>
              <div className='flex items-center justify-center has-tooltip planet top-5 left-10 lg:top-10 lg:left-32'>
                <span className='px-6 py-3 text-xl font-medium text-center border border-gray-300 shadow-lg mb-52 tooltip text-text-brand rounded-xl bg-brand-bg'>
                  Internet Of Things
                </span>
                <img src={iot} alt='' />
              </div>
            </Link>

            <Link to='/services'>
              <div className='flex items-center justify-center has-tooltip planet lg:-right-8 lg:top-2/4'>
                <span className='px-6 py-3 text-xl font-medium text-center border border-gray-300 shadow-lg bg-brand-bg mb-52 tooltip text-text-brand rounded-xl'>
                  Chatbots
                </span>
                <img src={chatbot} alt='' />
              </div>
            </Link>

            <Link to='/services'>
              <div className='flex items-center justify-center has-tooltip planet lg:top-2/4 lg:-left-8'>
                <span className='px-6 py-3 text-xl font-medium text-center border border-gray-300 shadow-lg bg-brand-bg mb-52 tooltip text-text-brand rounded-xl'>
                  Cyber Security
                </span>
                <img src={cyber} alt='' />
              </div>
            </Link>

            <div className='relative flex items-center justify-center w-64 h-64 bg-transparent border-2 rounded-full lg:w-md lg:h-md border-text-brand'>
              <Link to='/services'>
                <div className='flex items-center justify-center has-tooltip planet lg:top-16 lg:left-10'>
                  <span className='px-6 py-3 mb-40 text-xl font-medium text-center border border-gray-300 shadow-lg bg-brand-bg tooltip text-text-brand rounded-xl'>
                    Blockchain
                  </span>
                  <img src={blockchain} alt='' />
                </div>
              </Link>

              <Link to='/services'>
                <div className='flex items-center justify-center has-tooltip planet lg:top-16 lg:right-8'>
                  <span className='px-6 py-3 text-xl font-medium text-center border border-gray-300 shadow-lg bg-brand-bg mb-52 tooltip text-text-brand rounded-xl'>
                    Cloud Computing
                  </span>
                  <img src={cloudComputing} alt='' />
                </div>
              </Link>

              <Link to='/services'>
                <div className='flex items-center justify-center has-tooltip planet lg:-bottom-8 lg:left-1/2'>
                  <span className='px-6 py-3 text-xl font-medium text-center border border-gray-300 shadow-lg bg-brand-bg mb-52 tooltip text-text-brand rounded-xl'>
                    ML & AI
                  </span>
                  <img src={ml} alt='' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Zoom>

      <Zoom>
        <AccordionPage className='block lg:hidden' />
      </Zoom>
    </div>
  );
};

export default Services;
