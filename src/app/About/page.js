import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container flex flex-col px-5 py-24 mx-auto'>
          <div className='mx-auto lg:w-4/6'>
            <div className='overflow-hidden text-4xl italic font-extrabold text-center rounded-lg h-30'>
              <h1>From the Pastor&apos;s Desk</h1>

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
                <p className='mb-4 text-lg leading-relaxed'>
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
                  <br />
                  <br /> It is my conviction that our church family
                  deserves the very best we can offer. I gladly extend
                  other men of God preaching engagements. I believe
                  the worship experience is a sacred experience and
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
                  <br /> <br />
                  It always warms my heart to welcome visitors here at
                  Mt. Lovely. We extend you future invitations to
                  share and become more involved with our church. If
                  you are without a church home and would like to talk
                  with me personally, please call me on my cell (205)
                  587.6871 or visit the church office on Tuesdays
                  10-12.
                  <br />
                  <br /> Yours in Christ,
                  <br />
                  Pastor Bernard Harris
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
