import React from 'react';

const ContactForm = () => {
  return (
    <div className='p-8 border-2 border-gray-200 shadow-shadow-brand bg-brand-bg bg-opacity-40 rounded-3xl backdrop-filter backdrop-blur-3xl mb:mt-16 lg:mt-20 xl:mt-40'>
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
            <label>Phone *</label>
          </h5>
          <input
            type='text'
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

        <button type='submit' className='w-full p-2 mb-8 shadow-md primary-btn'>
          Submit <i className='fa fa-paper-plane'></i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
