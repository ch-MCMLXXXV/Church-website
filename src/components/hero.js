import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <section className='text-white bg-center bg-auto body-font bg-church'>
        <div className='container flex flex-col items-center px-5 py-24 mx-auto md:flex-row'>
          <div className='flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0'>
            <h1 className='mb-4 text-3xl font-medium text-white uppercase title-font sm:text-3xl'>
              Mt. Lovely Baptist Church
              {/* <br className='hidden lg:inline-block'>
                readymade gluten
              </br> */}
            </h1>
            <p className='mb-8 text-2xl italic font-boldleading-relaxed'>
              A People who love the Lord.
            </p>
            {/* <div className='flex justify-center'>
              <button className='inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600'>
                Button
              </button>
              <button className='inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200'>
                Button
              </button>
            </div> */}
          </div>
          <div className='w-5/6 lg:max-w-lg lg:w-full md:w-1/2'>
            <Image
              className='object-cover object-center rounded'
              alt='hero'
              src='/mt lovely logo.png'
              width={1500}
              height={1500}
            />
          </div>
        </div>
      </section>
    </>
  );
}
