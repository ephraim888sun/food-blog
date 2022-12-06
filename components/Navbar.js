import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-blue-500 text-gray-100 body-f shadow-sm'>
      {/* :DESKTOP MENU */}
      <div className='container mx-auto flex justify-between items-center py-7 px-5'>
        {/* Site logo and Name */}
        <Link
          href='/'
          className='flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='icon icon-tabler icon-tabler-ice-cream-2'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#ffffff'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M17.657 11.004a6 6 0 1 0 -11.315 0' />
            <path d='M6.342 11l5.658 11l5.657 -10.996z' />
          </svg>
          <span className='ml-3 text-xl text-gray-100 font-semibold antialiased'>
            Freshipes
          </span>
        </Link>
        {/* Navbar */}
        <nav className='hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide'>
          <Link href='/recipe' className='mr-8 hover:text-gray-300'>
            Recipe
          </Link>
          <Link href='/about' className='mr-8 hover:text-gray-300'>
            About
          </Link>
        </nav>
        {/* Avatar */}
        <div className='hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Navbar
