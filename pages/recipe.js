import Link from 'next/link'
import React from 'react'

const recipe = () => {
  return (
    <section className='bg-gray-900 text-white h-screen w-screen'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>
            How to make Protein Pizza
          </h2>

          <p className='mt-4 text-gray-300'>Guide to the True Masterpiece</p>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
            href='#'
          >
            <div className='font-bold text-2xl'>1.</div>
            <h2 className='mt-4 text-xl font-bold text-white'>
              Mix 1 Can Chicken Breast with 1 Egg
            </h2>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
            href='#'
          >
            <div className='font-bold text-2xl'>2.</div>

            <h2 className='mt-4 text-xl font-bold text-white'>
              Flatten into crust. Shake and Bake
            </h2>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
            href='/services/digital-campaigns'
          >
            <div className='font-bold text-2xl'>3.</div>

            <h2 className='mt-4 text-xl font-bold text-white'>
              Add Sauce and Toppings on top of Chicken Crust
            </h2>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
            href='#'
          >
            <div className='font-bold text-2xl'>4.</div>

            <h2 className='mt-4 text-xl font-bold text-white'>
              Bake for Another 10 Minutes at 350 Degrees
            </h2>
          </Link>

          <Link
            className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
            href='#'
          >
            <div className='font-bold text-2xl'>5.</div>

            <h2 className='mt-4 text-xl font-bold text-white'>
              Enjoy Finish Product
            </h2>
          </Link>
        </div>

        <div className='mt-12 text-center'>
          <Link
            href='/'
            className='mt-8 inline-flex items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500'
          >
            <span className='text-sm font-medium'> Return Home </span>

            <svg
              className='ml-3 h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default recipe
