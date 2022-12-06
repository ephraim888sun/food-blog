import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Mission = () => {
  return (
    <div className='relative w-full flex flex-col-reverse md:flex-row items-center overflow-hidden'>
      {/* :HERO IMAGE */}
      <div
        className='absolute w-full h-full bg-gradient-to-t from-blue-200 to-black'
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 75%)' }}
      >
        <Image
          src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          alt=''
          className='absolute w-full h-full object-cover object-top opacity-20'
          layout='fill'
          objectFit='cover'
        />
      </div>

      {/* :PRODUCT */}
      <div className='hidden sm:block relative w-full md:w-1/2 h-1/2 md:h-full'>
        <Image
          src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80'
          alt=''
          className='relative mx-auto sm:w-40 md:w-60 xl:w-64'
          width={400}
          height={400}
        />
      </div>

      {/* :HERO MAIN */}
      <div className='relative pt-20 pb-10 md:py-40 px-3 w-full md:w-1/2 h-full sm:h-1/2 md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left text-white'>
        {/* ::Small Title */}
        <h2 className='text-xl sm:text-3xl'>Click here for our</h2>

        {/* ::Big Title */}
        <Link href='/recipe'>
          <button className='text-5xl sm:text-7xl p-2 my-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-300 ring-offset-2'>
            Weekly Recipe!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Mission
