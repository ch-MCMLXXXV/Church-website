import Image from 'next/image';
import Navbar from '@/components/nav';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main classNameName=''>
      <Hero />
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col'>
            <div className='h-1 bg-gray-200 rounded overflow-hidden'>
              <div className='w-24 h-full bg-indigo-500'></div>
            </div>
            <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
              <h1 className='sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0'>
                Welcome to Mt. Lovely Baptist Church!
              </h1>
              <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0'>
                Senior Pastor: Reverend Dr. Bernard Harris
                <br />
                Associate Minister: Minister Gwendolyn Dees-Huhgley,
                M.Div.,PhD.
                <br />
                Associate Minister: Reverend Eddie Kelsey <br />
                Associate Minister: Reverend Ray M. Campbell
              </p>
            </div>
          </div>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4'>
            <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
              <div className='rounded-lg h-64 overflow-hidden'>
                <Image
                  alt='content'
                  className='object-cover object-center h-full w-full'
                  src='/pulpit2.jpg'
                  width={200}
                  height={200}
                />
              </div>
              <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
                Morning Worship
              </h2>
              <p className='text-base leading-relaxed mt-2'>
                Join us each Sunday for morning worship at 10:00am.*
              </p>
              <h4 classNameName='text-sm '>
                *Communion every 1st Sunday following worship service*{' '}
              </h4>
              {/* <a className='text-indigo-500 inline-flex items-center mt-3'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a> */}
            </div>
            <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
              <div className='rounded-lg h-64 overflow-hidden'>
                <Image
                  alt='content'
                  className='object-cover object-center h-full w-full'
                  src='/sundayschool.jpg'
                  width={200}
                  height={200}
                />
              </div>
              <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
                Sunday School
              </h2>
              <p className='text-base leading-relaxed mt-2'>
                Join us for Sunday School each sunday morning before
                worship service starting at 9:00am.
              </p>
              {/* <a className='text-indigo-500 inline-flex items-center mt-3'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a> */}
            </div>
            <div className='p-4 md:w-1/3 sm:mb-0 mb-6'>
              <div className='rounded-lg h-64 overflow-hidden'>
                <Image
                  alt='content'
                  className='object-cover object-center h-full w-full'
                  src='/biblestudy.jpg'
                  width={200}
                  height={200}
                />
              </div>
              <h2 className='text-xl font-medium title-font text-gray-900 mt-5'>
                Bible Study
              </h2>
              <p className='text-base leading-relaxed mt-2'>
                We welcome you to attend our Thursday night bible
                study each Thursday from 6pm - 7pm on campus.
              </p>
              {/* <a className='text-indigo-500 inline-flex items-center mt-3'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </section>
      {/* <section classNameName='p-6 bg-blue-400'>
        <div>
          <h1 classNameName='text-3xl font-bold '>
            Welcome to Mt. Lovely Baptist Church!
          </h1>
        </div>
      </section> */}
    </main>
  );
}
