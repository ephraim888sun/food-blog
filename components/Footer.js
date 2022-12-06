import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mt-16'>
          <div className='mt-16 sm:flex sm:items-center sm:justify-between'>
            <div className='flex justify-center items-center gap-x-1 sm:justify-start'>
              <div className='font-bold text-black text-xl hover:text-gray-500'>
                Freshipes
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
