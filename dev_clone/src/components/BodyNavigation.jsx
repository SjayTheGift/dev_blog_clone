import React from 'react'

const BodyNavigation = () => {
  return (
    <div className=' mb-2'>
        <div className='flex gap-5 text-xl'>
            <a className='font-bold hover:bg-white px-2 py-2 rounded-md hover:text-[#4350e0] cursor-pointer'>
                Relevant
            </a>
            <a className='text-gray-600 hover:bg-white px-2 py-2 rounded-md hover:text-[#4350e0] cursor-pointer'>
                latest
            </a>
            <a className='text-gray-600 hover:bg-white px-2 py-2 rounded-md hover:text-[#4350e0] cursor-pointer'>
                Top
            </a>
        </div>
        
    </div>
  )
}

export default BodyNavigation