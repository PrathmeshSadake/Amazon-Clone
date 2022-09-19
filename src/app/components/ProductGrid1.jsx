import React from 'react';

const ProductGrid1 = () => {
  return (
    <div className=' 2xl:container 2xl:mx-auto'>
      <div className=' py-6 lg:px-20 md:px-6 px-4'>
        <div className='bg-gray-50 text-center md:py-8 py-6'>
          <p className='w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800'>
            Great Indian Festival
          </p>
          <p className='w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800'>
            Products in Focus
          </p>
        </div>
        <div className=' grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
            <div>
              <div className='relative group'>
                <div className='flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full'></div>
                <img
                  className='w-full h-96 object-cover'
                  src='https://i.ibb.co/KLDN7Vt/gbarkz-vq-Knu-G8-Ga-Qc-unsplash.png'
                  alt='A girl posing and wearing white suit'
                />
                <div className=' absolute bottom-0 p-4 w-full opacity-0 group-hover:opacity-100'>
                  <button className=' font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full'>
                    Add to bag
                  </button>
                  <button className=' bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white'>
                    Quick View
                  </button>
                </div>
              </div>
              <p className=' font-normal text-lg leading-5 text-gray-700 mt-2'>
                Flared Cotton Tank Top
              </p>
              <p className=' font-semibold text-md leading-5 text-gray-600'>
                $1800
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid1;
