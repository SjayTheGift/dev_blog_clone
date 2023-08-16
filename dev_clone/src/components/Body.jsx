import React from 'react'
import Sidebar from './Sidebar'
import RightSideBar from './RightSideBar'


const Body = ({nav, setNav}) => {
  return (
    <>
    <section className='py-[90px] max-h-screen w-full px-5 md:px-0 md:w-[78%] mx-auto relative'>
        <div className="grid grid-cols-8 gap-4">
            <div className="col-span-2 max-h-screen">
                <Sidebar nav={nav} setNav={setNav}/>
            </div>

            <div className="col-span-4 bg-black">04</div>
            <div className="col-span-2">
                <RightSideBar />
            </div>
        </div>
    </section>
    </>
  )
}

export default Body