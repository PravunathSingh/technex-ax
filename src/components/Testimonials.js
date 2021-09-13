import React, { useState, useRef, useEffect } from 'react';
import { Slide, Zoom, Flip } from 'react-awesome-reveal';
import { TweenLite, Power3 } from 'gsap';
// import testimonialGif from '../assests/rounded-gif.gif';
import testimonialPerson from '../assests/testimonial/testimonial-person.png';
import person from '../assests/testimonial/person.png';
import testimonialPattern from '../assests/testimonial/testimonial-bg2.png';
import testimonialCircle from '../assests/testimonial/testimonialCircle.png';
import playBtn from '../assests/testimonial/play-btn.png';
// import './testimonials.css';

const testimonials = [
  {
    imgSrc: testimonialPerson,
    name: 'Johnathan Doe',
    statements: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
    consectetur, facere enim officiis iure in laborum magni acere enim
    officiis iure in laborum magni`,
  },

  {
    imgSrc: person,
    name: 'Jane Doe',
    statements: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
    consectetur, facere enim officiis iure in laborum magni acere enim
    officiis iure in laborum magni`,
  },
];

const Testimonials = () => {
  let imgList = useRef(null);
  let testimonialsList = useRef(null);

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
  });

  const nextSlide = () => {
    if (imgList.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive2: true });
    } else if (imgList.children[1].classList.contains('active')) {
      setState({ isActive1: true, isActive2: false });
    }
  };

  const prevSlide = () => {
    if (imgList.children[1].classList.contains('active')) {
      setState({ isActive1: true, isActive2: false });
    } else if (imgList.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive2: true });
    }
  };

  return (
    <div className='my-16 font-rubik'>
      <Slide>
        <div className='max-w-4xl px-8 mx-auto my-16 md:mb-4 lg:px-0'>
          <h1 class='text-3xl 2xl:text-5xl 2xl:leading-brand-spacing font-bold leading-relaxed text-center  text-text-primary'>
            Dont Just Take Our Word, See What Our{' '}
            <span className='text-text-brand'>Past Clients Have To Say</span>
          </h1>
        </div>
      </Slide>

      <div className='container grid md:grid-cols-2'>
        <div className='grid transition-all duration-300 my:20 lg:my-32 hover:scale-125 place-content-center'>
          <Zoom>
            <div className='relative cursor-pointer'>
              <div className='absolute hidden lg:block -top-16 -z-100 -left-16'>
                <img src={testimonialPattern} alt='' />
              </div>
              <div className='absolute hidden -right-16 -z-100 lg:block -bottom-20'>
                <img src={testimonialCircle} alt='' />
              </div>

              <div>
                <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-150 opacity-0 rounded-overlay bg-text-primary hover:opacity-70'>
                  <div>
                    <img src={playBtn} alt='' />
                  </div>
                </div>
                <div ref={(el) => (imgList = el)}>
                  <div
                    className={`transition-all duration-700 ${
                      state.isActive1
                        ? 'active opacity-100'
                        : 'hidden opacity-0'
                    }`}
                  >
                    <Zoom>
                      <img src={testimonials[0].imgSrc} alt='' />
                    </Zoom>
                  </div>
                  <div
                    className={`transition-all duration-700 ${
                      state.isActive2
                        ? 'active opacity-100'
                        : 'hidden opacity-0'
                    }`}
                  >
                    <Zoom>
                      <img src={testimonials[1].imgSrc} alt='' />
                    </Zoom>
                  </div>

                  <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-150 opacity-0 rounded-overlay bg-text-primary hover:opacity-70'>
                    <div>
                      <img src={playBtn} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>

        <div className='container grid mt-16 lg:mt-0 place-content-center'>
          <div ref={(el) => (testimonialsList = el)}>
            <div
              className={`transition-all duration-700 ${
                state.isActive1 ? 'active opacity-100' : 'hidden opacity-0'
              }`}
            >
              <Zoom>
                <h2 className='mb-5 text-3xl font-medium text-center lg:text-left lg:mb-10 lg:text-4xl text-testimonial-heading'>
                  {testimonials[0].name}
                </h2>
              </Zoom>

              <Zoom>
                <p className='mb-5 text-lg leading-relaxed text-center lg:text-left text-text-secondary-light lg:mb-10 lg:text-xl'>
                  {testimonials[0].statements}
                </p>
              </Zoom>
            </div>

            <div
              className={`transition-all duration-700 ${
                state.isActive2 ? 'active opacity-100' : 'hidden opacity-0'
              }`}
            >
              <Zoom>
                <h2 className='mb-5 text-3xl font-medium text-center lg:text-left lg:mb-10 lg:text-4xl text-testimonial-heading'>
                  {testimonials[1].name}
                </h2>
              </Zoom>

              <Zoom>
                <p className='mb-5 text-lg leading-relaxed text-center lg:text-left text-text-secondary-light lg:mb-10 lg:text-xl'>
                  {testimonials[1].statements}
                </p>
              </Zoom>
            </div>
          </div>

          <Zoom>
            <div className='flex justify-center gap-8'>
              <div
                className='p-3 rounded-full cursor-pointer hover:shadow-shadow-brand bg-chevron-bg'
                onClick={prevSlide}
              >
                <i className='fa fa-chevron-left fa-2x text-text-brand'></i>
              </div>
              <div
                className='p-3 rounded-full cursor-pointer hover:shadow-shadow-brand bg-chevron-bg'
                onClick={nextSlide}
              >
                <i className='fa fa-chevron-right fa-2x text-text-brand'></i>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
