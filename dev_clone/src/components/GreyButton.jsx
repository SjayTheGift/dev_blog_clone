import React from 'react'

const GreyButton = ({icon, name}) => {
  return (
    <>
        <a className='flex hover:rounded-lg  p-2 px-4 cursor-pointer hover:bg-purple-rgba hover:text-[#4350e0] hover:underline'>
          <span className='mr-2'>{icon}</span>{name}
        </a>
    </>
  )
}

export default GreyButton