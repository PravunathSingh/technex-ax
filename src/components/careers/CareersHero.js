import React from 'react';
import careersHero from '../../assests/careersPage/careersHero.png';
import { Slide, Zoom } from 'react-awesome-reveal';

const CareersHero = () => {
  return (
    <div className='container grid my-16 lg:my-28 font-rubik place-content-center'>
      <div className='max-w-4xl mx-auto'>
        <Zoom>
          <h1 className='text-4xl font-bold leading-relaxed text-center lg:text-5xl text-text-primary'>
            Work With Us At TechNeX
          </h1>
        </Zoom>

        <Slide>
          <p className='my-8 text-lg font-normal leading-relaxed text-center lg:leading-relaxed lg:text-xl md:my-16 lg:mt-16 lg:mb-28 text-text-secondary-light'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            distinctio minus corrupti fugiat est nesciunt odit ipsam facilis
            excepturi molestias ipsum veritatis cupiditate, eaque maxime nemo
            quaerat assumenda labore
          </p>
        </Slide>
      </div>

      <Zoom>
        <div className='mx-auto'>
          <img src={careersHero} alt='' />
        </div>
      </Zoom>

      <Slide>
        <div className='max-w-sm mx-auto mt-12 mb-28 lg:mb-40'>
          <button className='w-full primary-btn'>Explore Jobs</button>
        </div>
      </Slide>
    </div>
  );
};

export default CareersHero;
