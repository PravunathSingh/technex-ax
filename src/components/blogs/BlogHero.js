import React from 'react';
import Button from '../UI/Button';
import blogHero from '../../assests/blogPage/blogHero.png';
import { Slide, Zoom } from 'react-awesome-reveal';

const BlogHero = () => {
  return (
    <div className='font-rubik'>
      <div className='container grid gap-12 my-20 md:my-24 lg:my-28 xl:my-40 place-content-center lg:grid-cols-2'>
        <div className='order-2 lg:order-1'>
          <Slide>
            <div className='flex items-center justify-center mx-auto mb-8 lg:mx-0 md:mb-11 lg:mb-16 w-max'>
              <div className='w-24 h-1 mr-4 bg-footer-brand rounded-xl'></div>
              <div className='text-lg font-normal md:text-xl text-text-secondary-light lg:text-2xl xl:text-3xl'>
                BLOGS
              </div>
            </div>
          </Slide>

          <Slide>
            <h1 className='text-2xl font-bold leading-relaxed text-center md:text-3xl md:leading-relaxed lg:leading-relaxed lg:text-left lg:text-4xl text-text-primary'>
              From Solving Complex Engineering Problems To Building Scalable
              Design Systems, Get A Taste Of{' '}
              <span className='text-text-brand'>
                What Our Rockstars Have Achieved
              </span>
            </h1>
          </Slide>

          <Zoom>
            <Button
              className='w-full my-16 primary-btn lg:w-auto md:my-20'
              content='Explore'
            />
          </Zoom>
        </div>

        <div className='order-1 lg:order-2'>
          <Zoom>
            <div>
              <img src={blogHero} alt='' />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
