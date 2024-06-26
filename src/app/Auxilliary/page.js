import React from 'react';
import Image from 'next/image';

const Auxilliary = () => {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col w-full mb-20 text-center'>
            <h1 className='mb-4 text-2xl font-medium tracking-widest text-gray-900 title-font'>
              Our Auxilliaries
            </h1>
            <p className='mx-auto text-base leading-relaxed lg:w-2/3'>
              Here are some of our auxilliaries that help with various
              activities and functions of the church.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 lg:w-1/2'>
              <div className='flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left'>
                <Image
                  alt='Minister Wives'
                  className='flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0'
                  src='/ministerwives.jpg'
                  width={200}
                  height={200}
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='text-lg font-medium text-gray-900 title-font'>
                    Minister&apos;s Wives
                  </h2>
                  {/* <h3 className='mb-3 text-gray-500'>UI Developer</h3>
                  <p className='mb-4'>
                    DIY tote bag drinking vinegar cronut adaptogen
                    squid fanny pack vaporware.
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span> */}
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/2'>
              <div className='flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left'>
                <Image
                  alt='Deacons'
                  className='flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0'
                  src='/deacons.jpg'
                  width={200}
                  height={200}
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='text-lg font-medium text-gray-900 title-font'>
                    Deacons
                  </h2>
                  {/* <h3 className='mb-3 text-gray-500'>Designer</h3>
                  <p className='mb-4'>
                    DIY tote bag drinking vinegar cronut adaptogen
                    squid fanny pack vaporware.
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span> */}
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/2'>
              <div className='flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left'>
                <Image
                  alt='Ushers'
                  className='flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0'
                  src='/ushers.jpg'
                  width={200}
                  height={200}
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='text-lg font-medium text-gray-900 title-font'>
                    Ushers
                  </h2>
                  {/* <h3 className='mb-3 text-gray-500'>UI Developer</h3>
                  <p className='mb-4'>
                    DIY tote bag drinking vinegar cronut adaptogen
                    squid fanny pack vaporware.
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span> */}
                </div>
              </div>
            </div>
            <div className='p-4 lg:w-1/2'>
              <div className='flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left'>
                <Image
                  alt='Choir'
                  className='flex-shrink-0 object-cover object-center w-48 h-48 mb-4 rounded-lg sm:mb-0'
                  src=''
                  width={200}
                  height={200}
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='text-lg font-medium text-gray-900 title-font'>
                    Choir
                  </h2>
                  {/* <h3 className='mb-3 text-gray-500'>Designer</h3>
                  <p className='mb-4'>
                    DIY tote bag drinking vinegar cronut adaptogen
                    squid fanny pack vaporware.
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    </a>
                    <a className='ml-2 text-gray-500'>
                      <svg
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                      </svg>
                    </a>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auxilliary;
