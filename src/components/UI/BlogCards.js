import React from 'react';
import { Link } from 'react-router-dom';
import { Slide, Zoom } from 'react-awesome-reveal';
import blogImg1 from '../../assests/blog/blogImg1.png';
import blogImg2 from '../../assests/blog/blogImg2.png';
import blogImg3 from '../../assests/blog/blogImg3.png';

const BlogCards = () => {
  return (
    <div className='container grid gap-12 2xl:gap-24 md:grid-cols-2 lg:grid-cols-3'>
      <Zoom>
        <div className='h-max'>
          <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
            <div>
              <img src={blogImg1} alt='' className='w-full' />
            </div>
            <div class='p-6 h-auto'>
              <h2 className='mb-4 text-xl font-semibold md:mb-6 text-text-primary md:text-2xl xl:text-3xl'>
                Accessibility For All
              </h2>
              <h5 className='mb-6 text-base font-medium md:mb-8 text-text-secondary md:text-lg xl:text-xl'>
                26th July, 2021
              </h5>
              <p className='mb-6 text-base font-normal md:mb-8 text-text-secondary-light md:text-lg xl:text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus
                sit amet luctus venenatis Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut purus sit amet luctus venenatis
              </p>
              <Link
                to='/blogDetails'
                className='mb-6 text-base font-medium text-text-brand md:text-lg xl:text-xl md:mb-8'
              >
                Read More <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </div>
        </div>
      </Zoom>

      <Zoom>
        <div className='h-max'>
          <div className='border-2 border-gray-200 shadow-shadow-brand lg:mt-24 bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
            <div>
              <img src={blogImg2} alt='' className='w-full' />
            </div>
            <div class='p-6'>
              <h2 className='mb-4 text-xl font-semibold md:mb-6 text-text-primary md:text-2xl xl:text-3xl'>
                Automation == Future
              </h2>
              <h5 className='mb-6 text-base font-medium md:mb-8 text-text-secondary md:text-lg xl:text-xl'>
                26th July, 2021
              </h5>
              <p className='mb-6 text-base font-normal md:mb-8 text-text-secondary-light md:text-lg xl:text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus
                sit amet luctus venenatis Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut purus sit amet luctus venenatis
              </p>
              <Link
                to='/blogDetails'
                className='mb-6 text-base font-medium text-text-brand md:text-lg xl:text-xl md:mb-8'
              >
                Read More <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </div>
        </div>
      </Zoom>

      <Zoom>
        <div className='hidden h-max lg:block'>
          <div className='border-2 border-gray-200 shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
            <div>
              <img src={blogImg3} alt='' className='w-full' />
            </div>
            <div class='p-6'>
              <h2 className='mb-4 text-xl font-semibold md:mb-6 text-text-primary md:text-2xl xl:text-3xl'>
                Web Security 101
              </h2>
              <h5 className='mb-6 text-base font-medium md:mb-8 text-text-secondary md:text-lg xl:text-xl'>
                26th July, 2021
              </h5>
              <p className='mb-6 text-base font-normal md:mb-8 text-text-secondary-light md:text-lg xl:text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus
                sit amet luctus venenatis Lorem ipsum dolor sit amet,
                consectetur adipiscing elit ut purus sit amet luctus venenatis
              </p>
              <Link
                to='/blogDetails'
                className='mb-6 text-base font-medium text-text-brand md:text-lg xl:text-xl md:mb-8'
              >
                Read More <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default BlogCards;
