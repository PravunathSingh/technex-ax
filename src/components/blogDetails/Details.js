import React from 'react';
import detailSolar from '../../assests/detailsSolar.png';
import detail2 from '../../assests/blogDetails/detail2.png';
import detail3 from '../../assests/blogDetails/detail3.png';
import detail1 from '../../assests/blogDetails/detail1.png';

const Details = () => {
  return (
    <div className='mt-8 font-rubik lg:mt-14'>
      <div className='container mx-auto sm:w-max'>
        <h1 className='mb-4 text-3xl font-semibold leading-relaxed text-center lg:mb-6 text-text-primary lg:text-5xl'>
          Automation == Future
        </h1>
        <div className='flex justify-between'>
          <h5 className='text-lg font-medium text-text-secondary'>
            26th July, 2021
          </h5>
          <h5 className='text-lg font-medium text-text-secondary-light'>
            10 Minute Read
          </h5>
        </div>

        <div className='max-w-xs mx-auto'>
          <div className='flex flex-wrap items-center justify-between gap-6 p-4 mt-6 border-2 border-gray-200 lg:mt-10 font-rubik shadow-shadow-brand bg-opacity-70 rounded-3xl backdrop-filter backdrop-blur-xl'>
            <div>
              <i className='cursor-pointer far fa-heart fa-2x text-text-brand'></i>
            </div>
            <div>
              <i className='cursor-pointer far fa-bookmark fa-2x text-text-brand'></i>
            </div>
            <div>
              <i className='cursor-pointer far fa-share-square fa-2x text-text-brand'></i>
            </div>
          </div>
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

        <div className='container mx-auto my-12 lg:my-28'>
          <p className='text-base font-normal lg:leading-relaxed lg:text-xl text-text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut purus sit
            amet luctus venenatis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut purus sit amet luctus venenatis Lorem ipsum dolor
            sit amet, consectetur adipiscing elit ut purus sit amet luctus
            venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            purus sit amet luctus venenatis Lorem ipsum dolor sit amet,
            consectetur adipiscing elit ut purus sit amet luctus venenatis Lorem
            ipsum dolor sit amet, consectetur adipiscing elit ut purus sit amet
            luctus venenatis Lorem ipsum dolor sit amet,
          </p>

          <div>
            <h4 className='mt-8 text-xl font-medium text-text-primary lg:text-2xl lg:mt-16'>
              Heading 1
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
              Heading 2
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
            <img src={detailSolar} alt='' />
          </div>
          <div className='mt-40 ml-auto w-max'>
            <img src={detail1} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
