import React from 'react'

const GrayButtonTags = ({name}) => {
  return (
    <>
        <a className='flex hover:rounded-lg  p-2 px-4 cursor-pointer hover:bg-purple-rgba hover:text-[#4350e0] hover:underline'>
          <span className='mr-2'>#{name}</span>
        </a>
    </>
  )
}

export default GrayButtonTags