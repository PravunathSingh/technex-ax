import React from 'react';
import Header from '../Header';
import { Slide, Zoom } from 'react-awesome-reveal';
import careerSolar from '../../assests/careerSolar.png';
import careersHero from '../../assests/careersPage/careersHero.png';
import detail2 from '../../assests/blogDetails/detail2.png';
import detail3 from '../../assests/blogDetails/detail3.png';
import detail1 from '../../assests/blogDetails/detail1.png';
import Footer from '../Footer';
import CareersForm from '../careers/CareersForm';

const CareerDetails = () => {
  return (
    <div className='font-rubik'>
      <Header />

      <div className='my-12 lg:my-24'>
        <Slide>
          <h1 className='mb-10 text-4xl font-bold leading-relaxed text-center lg:mb-16 lg:text-5xl text-text-primary'>
            Work With Us At TechNeX
          </h1>
        </Slide>
        <div className='max-w-5xl mx-auto'>
          <Zoom>
            <div className='mx-auto'>
              <img src={careersHero} alt='' />
            </div>
          </Zoom>
        </div>
      </div>

      <div className='flex'>
        <div className='hidden lg:block'>
          <div className='w-max'>
            <img src={detail2} alt='' />
          </div>
          <div className='mt-40 w-max'>
            <img src={detail3} alt='' />
          </div>
        </div>

        <div className='container mx-auto mb-16 lg:mb-28'>
          <h3 className='mb-4 text-3xl font-semibold leading-relaxed lg:leading-relaxed lg:text-5xl text-text-brand'>
            Senior Software Engineer
          </h3>

          <h5 className='mb-4 text-xl font-medium lg:text-2xl text-text-brand'>
            Experience: 2 - 3 Years
          </h5>

          <div>
            <h4 className='mt-8 text-xl font-medium text-text-primary lg:text-2xl lg:mt-16'>
              What We Are Looking For
            </h4>

            <p className='mt-4 text-base font-normal lg:mt-6 lg:leading-relaxed lg:text-xl text-text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus
              sit amet luctus venenatis Lorem ipsum dolor sit amet adipiscing
              elit ut purus sit amet luctus venenatis Lorem ipsum dolor sit amet
            </p>

            <ul className='mt-4 text-base font-normal list-disc list-inside lg:mt-6 lg:leading-relaxed lg:text-xl text-text-secondary'>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus
              </li>
            </ul>
          </div>

          <div>
            <h4 className='mt-8 text-xl font-medium text-text-primary lg:text-2xl lg:mt-16'>
              What You Will Do
            </h4>

            <p className='mt-4 text-base font-normal lg:mt-6 lg:leading-relaxed lg:text-xl text-text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus
              sit amet luctus venenatis Lorem ipsum dolor sit amet adipiscing
              elit ut purus sit amet luctus venenatis Lorem ipsum dolor sit amet
            </p>

            <ul className='mt-4 text-base font-normal list-disc list-inside lg:mt-6 lg:leading-relaxed lg:text-xl text-text-secondary'>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus
              </li>
            </ul>

            <p className='mt-6 text-base font-normal lg:mt-8 lg:leading-relaxed lg:text-xl text-text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus
              sit amet luctus venenatis Lorem ipsum dolor sit amet adipiscing
              elit ut purus sit amet luctus venenatis Lorem ipsum dolor sit amet
              Lorem ipsum dolor sit amet adipiscing elit ut purus sit amet
              luctus venenatis Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>

        <div className='hidden lg:block'>
          <div className='ml-auto w-max'>
            <img src={careerSolar} alt='' />
          </div>
          <div className='mt-40 ml-auto w-max'>
            <img src={detail1} alt='' />
          </div>
        </div>
      </div>

      <CareersForm />
      <Footer />
    </div>
  );
};

export default CareerDetails;
