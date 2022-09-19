import React, { useState } from 'react';

export default function ProductCategories() {
  return (
    <div className='flex justify-center items-center'>
      <div className='2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full'>
        <div className='flex flex-col jusitfy-center items-center space-y-10'>
          <div className='flex flex-col justify-center items-center space-y-2'>
            <p className='text-xl leading-5 text-gray-600'>2022 Trendsetters</p>
            <h1 className='text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800'>
              Shop By Category
            </h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 w-full'>
            <div className='relative group flex justify-center items-center h-full w-full'>
              <img
                className='object-center object-cover h-full w-full'
                src='https://source.unsplash.com/Q-72wa9-7Dg'
                alt='girl-image'
              />
              <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
                Clothing
              </button>
              <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
            </div>
            <div className='flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0'>
              <div className='relative group flex justify-center items-center h-full w-full'>
                <img
                  className='object-center object-cover h-96 w-full'
                  src='https://source.unsplash.com/OgqWLzWRSaI'
                  alt='shoe-image'
                />
                <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
                  Sports
                </button>
                <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
              </div>
              <div className='relative group flex justify-center items-center h-full w-full'>
                <img
                  className='object-center object-cover h-96 w-full'
                  src='https://source.unsplash.com/U_rsN9KFvsQ'
                  alt='watch-image'
                />
                <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
                  Mobile
                  <br />
                  and
                  <br />
                  Electronics
                </button>
                <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
              </div>
            </div>
            <div className='relative group justify-center items-center h-full w-full hidden lg:flex'>
              <img
                className='object-center object-cover h-full w-full'
                src='https://source.unsplash.com/ip9R11FMbV8'
                alt='girl-image'
              />
              <button className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white'>
                Books
              </button>
              <div className='absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
