import React from 'react'

const CardRightSideBar = ({extra, name}) => {
  return (
    <>
      <div className='border-t border-t-gray-100  px-1 pt-4 text-gray-500 hover:text-[#4350e0] cursor-pointer w-full h-full'>
            <a href='#' className='text-md'>
                {name}
            </a>
      </div>
      <div className='cursor-pointer w-full pb-2 mt-2'>
        {extra === 'New' ? 
            <p className='bg-yellow-500 text-red-800 w-10 px-1 text-center rounded-md text-sm cursor-pointer'>{extra}</p> : 
            <p className='mt-3 text-sm text-gray-500'>{extra}</p>}
      </div>
    </>
  )
}

export default CardRightSideBar
