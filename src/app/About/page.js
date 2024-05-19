import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container flex flex-col items-center px-5 py-24 mx-auto md:flex-row'>
          <div className='w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0'>
            <Image
              className='object-cover object-center rounded'
              alt='pulpit'
              src='/pulpit.jpg'
              width={500}
              height={500}
            />
          </div>
          <div className='flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left'>
            <h1 className='mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl'>
              History of the Church
            </h1>
            <p className='mb-5 leading-relaxed indent-8'>
              About the year of 1893, the spirit of God led together a
              group of men and women under a bush arbor in Camp Hill,
              Alabama. They named the house of worship Liberty Hill
              Baptist Church. It wasn&apos;t long after they had saved
              enough money to purchase a small frame building from the
              Universalist Church. This church building stood on a
              half acre plot and was call Mt. Canaan. The Lord smiled
              on the congregation and their efforts. Several pastors
              added to the building of the kingdom through doctrinal
              preaching, organizational skills and record keeping.
            </p>
            <p className='mb-5 leading-relaxed indent-8'>
              During the early 1930&apos;s, the church name was
              changed to it&apos;s present name, the Mount Lovely
              Baptist Church. In 1937, the church house burned and
              services were held in a nearby school building. The
              rebuilding occurred over the next few years with a brick
              structure resulting. An additional acre of land was
              purchased. Each decade produced significant progress
              under the leadership of various pastors. During the
              1970&apos;s,80&apos;s and 90&apos;s, many church
              accomplishments were realized. In 1995, under the
              leadership of the church&apos;s eighteenth pastor, Rev.
              Bernard Harris, the church began to hold worship
              services each Sunday.
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
        </div>
      </section>
      {/* <section class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto flex flex-wrap'>
          <h2 class='sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5'>
            History of the Church
          </h2>
          <div class='md:w-3/5 md:pl-6'>
            <p class='leading-relaxed text-base'>
              About the year of 1893, the spirit of God led together a
              group of men and women under a bush arbor in Camp Hill,
              Alabama. They named the house of worship Liberty Hill
              Baptist Church. It wasn&apos;t long after they had saved
              enough money to purchase a small frame building from the
              Universalist Church. This church building stood on a
              half acre plot and was call Mt. Canaan. The Lord smiled
              on the congregation and their efforts. Several pastors
              added to the building of the kingdom through doctrinal
              preaching, organizational skills and record keeping.
              <br />
              During the early 1930&apos;s, the church name was
              changed to it&apos;s present name, the Mount Lovely
              Baptist Church. In 1937, the church house burned and
              services were held in a nearby school building. The
              rebuilding occurred over the next few years with a brick
              structure resulting. An additional acre of land was
              purchased. Each decade produced significant progress
              under the leadership of various pastors. During the
              1970&apos;s,80&apos;s and 90&apos;s, many church
              accomplishments were realized. In 1995, under the
              leadership of the church&apos;s eighteenth pastor, Rev.
              Bernard Harris, the church began to hold worship
              services each Sunday.
            </p>
            <div class='flex md:mt-4 mt-6'>
              <button class='inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded'>
                Button
              </button>
              <a class='text-indigo-500 inline-flex items-center ml-4'>
                Learn More
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  class='w-4 h-4 ml-2'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section className='text-gray-600 body-font'>
        <div className='container flex flex-col px-5 py-24 mx-auto'>
          <div className='mx-auto lg:w-4/6'>
            <div className='overflow-hidden text-4xl italic font-extrabold text-center rounded-lg h-30'>
              <h1 className='text-black '>
                From the Pastor&apos;s Desk
              </h1>

              {/* <Image
                alt='content'
                className='object-cover object-center w-full h-full'
                src='https://dummyimage.com/1200x500'
                width={200}
                height={200}
              /> */}
            </div>
            <div className='flex flex-col mt-10 sm:flex-row'>
              <div className='text-center sm:w-1/3 sm:pr-8 sm:py-8'>
                <div className='inline-flex items-center justify-center text-gray-400 w-30 h-30 '>
                  <Image
                    alt='Rev.Harris'
                    src='/harris2.jpg'
                    width={300}
                    height={300}
                    className='rounded-full '
                  />

                  {/* <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-10 h-10'
                    viewBox='0 0 24 24'
                  >
                    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg> */}
                </div>
                <div className='flex flex-col items-center justify-center text-center'>
                  <h2 className='mt-4 text-lg font-medium text-gray-900 title-font'>
                    Rev. Bernard Harris
                  </h2>
                  <div className='w-12 h-1 mt-2 mb-4 bg-indigo-500 rounded'></div>
                  <p className='text-base'>
                    From the Pastor&apos;s Desk
                  </p>
                </div>
              </div>
              <div className='pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left'>
                <p className='mb-2 leading-relaxed indent-8'>
                  The Lord is gracious and He continues to smile on
                  our church family. As we grow both numerically and
                  spiritually, we count it a blessing from God. At our
                  church, there is a genuineness and love for God and
                  His people. Perhaps, this is how our name arrived,
                  the Mount Lovely Missionary Baptist Church. On a
                  personal note, I consider myself the most fortunate
                  pastor of any church family to have this blessed
                  opportunity to serve at Mt. Lovely and the
                  surrounding communities.
                </p>
                <p className='mb-2 leading-relaxed indent-8'>
                  It is my conviction that our church family deserves
                  the very best we can offer. I gladly extend other
                  men of God preaching engagements. I believe the
                  worship experience is a sacred experience and
                  therefore should promote God and the preaching of
                  the gospel. All activities and meetings at our
                  church shall have a spiritual component and lay a
                  foundation for spiritual growth. Christian education
                  is important and our spiritual leaders and teachers
                  shall encourage inclusion and participation of all
                  members. Whereas, I am a supporter of creativity and
                  innovation of various approaches in the spread of
                  the gospel. I maintain that the presentation should
                  be based on the WORD of God.
                </p>
                <p className='mb-2 leading-relaxed indent-8'>
                  It always warms my heart to welcome visitors here at
                  Mt. Lovely. We extend you future invitations to
                  share and become more involved with our church. If
                  you are without a church home and would like to talk
                  with me personally, please call me on my cell (205)
                  587.6871 or visit the church office on Tuesdays
                  10am-12pm.
                </p>
                <p className='mb-4 leading-relaxed'>
                  Yours in Christ,
                </p>
                <p className='mb-4 leading-relaxed'>
                  Sr. Pastor Bernard Harris
                </p>
                {/* <a className='inline-flex items-center text-indigo-500'>
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
        </div>
      </section>
    </>
  );
}
