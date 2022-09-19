import React, { useState } from 'react';

export default function ProductGrid2() {
  return (
    <div className='mx-auto container px-6 xl:px-0 py-12'>
      <div className='flex flex-col'>
        <div className='flex flex-col justify-center'>
          <div className='relative'>
            <img
              className='hidden sm:block w-full'
              src='https://www.applestore.pk/wp-content/uploads/2020/03/iPhone-11-Pro-Inner-Banner-1920-X-710-Website.jpg'
              alt='sofa'
            />
            <img
              className='sm:hidden w-full'
              src='https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png'
              alt='sofa'
            />
            <div className='absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start'>
              <p className='text-3xl sm:text-4xl font-semibold leading-9 text-white'>
                Range of iPhones
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
