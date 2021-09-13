import React from 'react';
import { Link } from 'react-router-dom';

const CareerCard = ({ title, tech, exp, content }) => {
  return (
    <div className='w-full p-8 mt-16 border-2 border-gray-200 font-rubik shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
      <h3 className='mb-4 text-2xl font-semibold lg:text-3xl text-text-brand'>
        {title}
      </h3>
      <h6 className='mb-4 text-base font-normal lg:text-lg text-text-brand'>
        Technologies: {tech}
      </h6>
      <h6 className='mb-4 text-base font-normal lg:text-lg text-text-brand'>
        Experience: {exp}
      </h6>
      <div className='flex flex-wrap justify-between gap-6'>
        <div>
          <p className='text-sm leading-relaxed sm:text-xl text-text-secondary-light'>
            {content}
          </p>
        </div>
        <div>
          <Link to='/careerDetails'>
            <p className='text-base font-medium cursor-pointer sm:text-xl text-text-brand'>
              View Details <i className='fa fa-chevron-right'></i>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
