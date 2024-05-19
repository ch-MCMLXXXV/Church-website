import React from 'react';

const Contact = () => {
  return (
    <>
      <section className='relative text-gray-600 body-font'>
        <div className='absolute inset-0 bg-gray-300'>
          <iframe
            width='100%'
            height='100%'
            frameborder='0'
            marginheight='0'
            marginwidth='0'
            title='map'
            scrolling='no'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.538486114592!2d-85.65080316315196!3d32.8065049798009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888c63b515cde28f%3A0x755d539d095d73c3!2s21900%20Sen%20Claude%20Pepper%20Dr%2C%20Camp%20Hill%2C%20AL%2036850!5e0!3m2!1sen!2sus!4v1714940431032!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
            style={{
              filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
            }}
          ></iframe>
        </div>
        <div className='container flex px-5 py-24 mx-auto'>
          <div className='relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0'>
            <h2 className='mb-1 text-lg font-medium text-gray-900 title-font'>
              Contact Us
            </h2>
            <p className='mb-5 leading-relaxed text-gray-600'>
              Please fill out this short form and we will get back to
              you as soon as possible.
            </p>
            <div className='relative mb-4'>
              <label
                for='email'
                className='text-sm leading-7 text-gray-600'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
              />
            </div>
            <div className='relative mb-4'>
              <label
                for='message'
                className='text-sm leading-7 text-gray-600'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
              ></textarea>
            </div>
            <button className='px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600'>
              Button
            </button>
            <p className='mt-3 text-xs text-gray-500'>
              Thank you for contacting us!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
