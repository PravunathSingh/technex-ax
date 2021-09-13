import React from 'react';
import project1 from '../assests/projects/project1.png';
import project2 from '../assests/projects/project2.png';
import project3 from '../assests/projects/project3.png';
import techStack from '../assests/projects/tech-stack.png';
import Button from './UI/Button';
import { Slide, Zoom } from 'react-awesome-reveal';

const Projects = () => {
  return (
    <div className='container my-20 lg:my-48 font-rubik'>
      <Slide>
        <h1 className='mb-8 text-4xl font-bold leading-relaxed text-center md:mb-10 2xl:text-5xl text-text-primary'>
          Need Work Samples ?
        </h1>
      </Slide>

      <Slide>
        <p className='mb-16 text-2xl font-medium text-center lg:mb-36 lg:4xl text-text-secondary'>
          Check the collection of{' '}
          <span className='text-text-brand'>our finest works</span>
        </p>
      </Slide>

      <div className='gap-16 lg:grid lg:grid-cols-3'>
        <Zoom>
          <div className='mb-12 border-gray-300 shadow-shadow-projects lg:mb-0 bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
            <div className='overflow-hidden'>
              <img
                src={project1}
                alt=''
                className='hidden w-full h-auto overflow-hidden lg:block'
              />

              <img
                src='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                alt=''
                className='block w-full h-auto overflow-hidden lg:hidden'
              />
            </div>

            <div className='p-8 md:py-10 md:px-8'>
              <h4 className='mb-6 text-2xl font-medium text-center md:mb-12 md:text-3xl text-text-primary'>
                E-Commerce Website
              </h4>

              <p className='block mb-6 text-base font-normal text-center md:mb-12 lg:text-xl text-text-secondary-light'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
                corrupti dolor eum nisi corrupti dolor eum nisi
              </p>

              <h4 className='mb-6 text-2xl font-medium text-center md:text-3xl md:mb-12 text-text-primary'>
                Tech Stack
              </h4>

              <div className='flex justify-center'>
                <img src={techStack} alt='' />
              </div>
            </div>
          </div>
        </Zoom>

        <div className='col-span-2 gap-16 lg:grid'>
          <Zoom>
            <div className='h-max'>
              <div className='mb-12 border-gray-500 shadow-shadow-projects lg:mb-0 bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl lg:grid lg:grid-cols-3'>
                <div className='h-full ml-auto lg:order-2'>
                  <img
                    src={project3}
                    alt=''
                    className='hidden w-full h-auto overflow-hidden lg:h-full lg:block'
                  />

                  <img
                    src='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                    alt=''
                    className='block w-full h-auto overflow-hidden lg:hidden'
                  />
                </div>

                <div className='p-6 text-center lg:col-span-2'>
                  <h4 className='mb-6 text-2xl font-medium text-center md:mb-12 md:text-3xl text-text-primary'>
                    Boozimba
                  </h4>

                  <p className='block mb-6 text-base font-normal text-center md:mb-12 lg:text-xl text-text-secondary-light'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Error corrupti dolor eum nisi corrupti dolor eum nisi
                  </p>

                  <h4 className='mb-6 text-2xl font-medium text-center md:text-3xl md:mb-12 text-text-primary'>
                    Tech Stack
                  </h4>

                  <div className='flex justify-center'>
                    <img src={techStack} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom>
            <div className='mb-12 border-gray-500 shadow-shadow-projects lg:mb-0 bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl lg:grid lg:grid-cols-3'>
              <div className='h-full ml-auto'>
                <img
                  src={project2}
                  alt=''
                  className='hidden w-full h-auto overflow-hidden lg:h-full lg:block'
                />

                <img
                  src='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                  alt=''
                  className='block w-full h-auto overflow-hidden lg:hidden'
                />
              </div>

              <div className='p-6 text-center lg:col-span-2'>
                <h4 className='mb-6 text-2xl font-medium text-center md:mb-12 md:text-3xl text-text-primary'>
                  BriCabin
                </h4>

                <p className='block mb-6 text-base font-normal text-center md:mb-12 lg:text-xl text-text-secondary-light'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Error corrupti dolor eum nisi corrupti dolor eum nisi
                </p>

                <h4 className='mb-6 text-2xl font-medium text-center md:text-3xl md:mb-12 text-text-primary'>
                  Tech Stack
                </h4>

                <div className='flex justify-center'>
                  <img src={techStack} alt='' />
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>

      <Slide>
        <div className='flex justify-center mx-auto my-12 md:my-24'>
          <Button
            className='w-full primary-btn lg:w-auto'
            content='See All Projects'
          />
        </div>
      </Slide>
    </div>
  );
};

export default Projects;
