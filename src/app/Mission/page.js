import React from 'react';

const Mission = () => {
  return (
    <>
      <section class='text-gray-600 body-font'>
        <div class='container px-5 py-24 mx-auto flex flex-wrap'>
          <h2 class='sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5'>
            Church Mission
          </h2>
          <div class='md:w-3/5 md:pl-6'>
            <p class='leading-relaxed text-base indent-8 text-left mb-2'>
              We are proud to serve as one of the lead churches in the
              Ebenezer District Association. We will support our
              Association with finances and personal participation.
              Each member of our church understands God&apos;s
              expectation of their personal commitment to tithe,
              talents and time in relationship to the operation of the
              church. The mission of Mt. Lovely Baptist Church is
              multidimensional:
            </p>
            <ul className='px-5 list-disc list-outside'>
              <li>
                Preaching the gospel which leads the lost individual
                to salvation is our primary goal.
              </li>
              <li>
                Provide a ministry of music whereby the gospel can be
                shared through song
              </li>
              <li>
                *Provisions for Christian Education presented through
                various interventions: A well organized church school
                Auxiliaries of the church Workshops and seminars
              </li>
              <li>
                Provide a strong Youth Department Youth leadership
                development Educational and entertaining travel
              </li>
              <li>
                Provisions for the visitation of the sick and shut in
                and others Pastor/Deacon Ministry & Missionary Society
              </li>
              <li>
                Observance of the Ordinances of the Church The
                Lord&apos;s Supper/ Mode of Baptism (Immersion)
              </li>
              <li>
                Provide Christian Counseling Personal Counseling
                Marital Counseling
              </li>
            </ul>
            {/* <div class='flex md:mt-4 mt-6'>
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
