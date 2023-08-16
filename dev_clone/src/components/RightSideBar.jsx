import React from 'react'

const RightSideBar = () => {
  return (
    <>
      <div className='shadow-m rounded-md px-5 pt-5 pb-3 bg-white'>
        <div className='flex justify-between items-center'>
            <p className='font-bold'>Listings</p>
            <a href='#' className='text-[#4350e0]'>See all</a>
        </div>

        <div className='border-t border-t-gray-400  px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                50 High Quality Developer Jobs as Top VC Funded Startups 
                in our Free Weekly Newsletter
            </a>
            <p className='mt-3'>misc</p>
        </div>
        <div className='border-t border-t-gray-400  px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                How to Code with Java -Guide
            </a>
            <p className='mt-3'>education</p>
        </div>
        <div className='border-t border-t-gray-400  px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                OpenSource Alternative to Postman
            </a>
            <p className='mt-3'>collabs</p>
        </div>
        <div className='border-t border-t-gray-400  px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                Supercharge your application performance: Consuming
                Symfony messenger messages with Go 
            </a>
            <p className='mt-3'>products</p>
        </div>
        <div className='border-t border-t-gray-400  px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                Publish your developer story or read developer new
            </a>
            <p className='mt-3'>education</p>
        </div>
        <a href='#' className='flex text-center items-center text-gray-600 hover:text-[#4350e0] border-t border-t-gray-400 w-full'>
            <span className='w-full mt-2 font-semibold'>Create a Listings</span>
             
        </a>
      </div>
    </>
  )
}

export default RightSideBar
