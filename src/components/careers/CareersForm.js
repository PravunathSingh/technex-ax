import React from 'react';
import careersPattern from '../../assests/careersPage/careersPattern.png';
import careersCircle from '../../assests/careersPage/careersCircle.png';
import { Slide, Zoom } from 'react-awesome-reveal';

const CareersForm = () => {
  return (
    <div className='container max-w-2xl mx-auto mb-20 h-max lg:mb-72 font-rubik'>
      <div>
        <Slide>
          <h1 className='mb-8 text-3xl font-medium text-center md:mb-10 lg:mb-12 lg:text-4xl text-text-primary'>
            APPLY NOW
          </h1>
        </Slide>

        <Zoom>
          <p className='mb-12 text-lg font-normal leading-relaxed text-center lg:leading-relaxed lg:text-xl lg:mb-40 text-text-secondary-light'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            distinctio minus corrupti
          </p>
        </Zoom>
      </div>

      <Slide>
        <div className='relative p-8 border-2 border-gray-200 bg-brand-bg shadow-shadow-brand rounded-3xl'>
          <div className='absolute hidden lg:block -top-28 -left-28 -z-100'>
            <img src={careersPattern} alt='' />
          </div>
          <div className='absolute hidden lg:block -bottom-48 -right-48 -z-100'>
            <img src={careersCircle} alt='' />
          </div>

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

            <div className='grid md:gap-16 md:grid-cols-2'>
              <div>
                <h5 className='mb-3 text-lg font-medium text-text-secondary md:text-xl'>
                  <label>Experience *</label>
                </h5>
                <input
                  type='text'
                  required
                  className='w-full px-4 py-2 mb-8 text-gray-800 placeholder-gray-600 bg-gray-100 shadow-md outline-none rounded-xl focus:shadow-xl focus:bg-gray-50 focus:ring-2 ring-offset-4 ring-text-brand'
                />
              </div>

              <div className='mb-5'>
                <h5>
                  <label className='mb-3 text-lg font-medium text-text-secondary md:text-xl'>
                    Upload CV *
                    <div>
                      <i className='mt-4 mr-2 cursor-pointer fa fa-cloud-upload-alt fa-2x text-text-brand'>
                        <input
                          type='file'
                          required
                          id='customFile'
                          className='hidden'
                        />
                      </i>
                    </div>
                  </label>
                </h5>
              </div>
            </div>

            <div>
              <h5 className='mb-3 text-lg font-medium text-text-secondary md:text-xl'>
                <label>Known Technologies *</label>
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
      </Slide>
    </div>
  );
};

export default CareersForm;
