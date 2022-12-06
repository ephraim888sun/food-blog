import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <section className='relative bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]'>
      <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25'></div>

      <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-center sm:text-left'>
          <h1 className='text-3xl font-extrabold sm:text-5xl'>
            We want to find your
            <strong className='block font-extrabold text-primary'>
              Recipe
            </strong>
          </h1>

          <p className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed'>
            Click to see newest recipe!!!
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <Link
              href='/recipe'
              className='block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/75 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto'
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
