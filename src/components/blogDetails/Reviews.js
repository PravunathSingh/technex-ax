import React from 'react';
import t1 from '../../assests/aboutUsPage/t1.png';

const Reviews = () => {
  return (
    <div className='container my-12 lg:my-16 font-rubik'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-2xl font-medium text-text-brand lg:text-3xl'>
          Reviews
        </h2>

        <div className='flex gap-6 mt-8 lg:mt-12'>
          <div>
            <img src={t1} alt='' />
          </div>

          <div className='w-full'>
            <textarea
              cols='30'
              rows='5'
              required
              placeholder='Write A Review'
              className='w-full px-4 py-2 mb-8 text-gray-800 placeholder-gray-600 bg-gray-100 outline-none shadow-shadow-projects rounded-xl focus:shadow-shadow-projects focus:bg-gray-50 focus:ring-2 ring-offset-4 ring-text-brand'
            ></textarea>
          </div>
        </div>

        <div className='flex justify-between mt-12 mb-24 lg:mt-20 lg:mb-40'>
          <h5 className='text-lg font-semibold cursor-pointer lg:text-2xl text-text-brand'>
            <i className='fa fa-arrow-left'></i> Previous Blog
          </h5>
          <h5 className='text-lg font-semibold cursor-pointer lg:text-2xl text-text-brand'>
            Next Blog <i className='fa fa-arrow-right'></i>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
