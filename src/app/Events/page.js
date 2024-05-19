import React from 'react';
import Image from 'next/image';

const Events = () => {
  return (
    <>
      <section className='overflow-hidden text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='-my-8 divide-y-2 divide-gray-100'>
            <div className='flex flex-wrap py-8 md:flex-nowrap'>
              <div className='flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0'>
                <span className='font-semibold text-gray-700 title-font'>
                  DATE
                </span>
                <span className='mt-1 text-sm text-gray-500'>
                  19 May 2024
                </span>
              </div>
              <div className='md:flex-grow'>
                <h2 className='mb-2 text-2xl font-medium text-gray-900 title-font'>
                  Pastor&apos;s Anniversary
                </h2>
                <p className='leading-relaxed'>
                  Time: 2pm <br />
                  Guest Speaker: Rev. Melvin Owens
                </p>
                {/* <a className='inline-flex items-center mt-4 text-indigo-500'>
                  Learn More
                  <svg
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
            <div className='flex flex-wrap py-8 md:flex-nowrap'>
              <div className='flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0'>
                <span className='font-semibold text-gray-700 title-font'>
                  DATE
                </span>
                <span className='mt-1 text-sm text-gray-500'>
                  4th Aug 2024
                </span>
              </div>
              <div className='md:flex-grow'>
                <h2 className='mb-2 text-2xl font-medium text-gray-900 title-font'>
                  Church Anniversary
                </h2>
                <p className='leading-relaxed'>
                  Time: 2pm <br />
                  Guest Speaker: Rev. Gary Dixon
                </p>
                {/* <a className='inline-flex items-center mt-4 text-indigo-500'>
                  Learn More
                  <svg
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
            <div className='flex flex-wrap py-8 md:flex-nowrap'>
              <div className='flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0'>
                <span className='font-semibold text-gray-700 title-font'>
                  DATE
                </span>
                <span className='text-sm text-gray-500'>
                  5-7 Aug 2024
                </span>
              </div>
              <div className='md:flex-grow'>
                <h2 className='mb-2 text-2xl font-medium text-gray-900 title-font'>
                  Revival
                </h2>
                <p className='leading-relaxed'>
                  Time: 6:30pm <br />
                  Aug 5th guest speaker: Rev. Edward Milner
                  <br />
                  Aug 6th guest speaker: Rev. Tyrone Edwards
                  <br />
                  Aug 7th guest speaker: Rev. Otis Tyner
                </p>
                {/* <a className='inline-flex items-center mt-4 text-indigo-500'>
                  Learn More
                  <svg
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
