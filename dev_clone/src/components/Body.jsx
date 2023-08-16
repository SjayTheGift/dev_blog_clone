import React from 'react'
import Sidebar from './Sidebar'
import RightSideBar from './RightSideBar'


const Body = ({nav, setNav}) => {
  return (
    <>
    <section className='py-[90px] max-h-screen w-full px-8 md:px-0 xl:w-[80%] mx-auto relative'>
        <div className="grid grid-cols-6 lg:grid-cols-8 gap-4 px-5">
            <div className="col-span-2 max-h-screen w-full">
                <Sidebar nav={nav} setNav={setNav}/>
            </div>

            <div className="col-span-4 bg-black w-full">04</div>
            <div className="col-span-2  hidden lg:block">
                <RightSideBar />
            </div>
        </div>
    </section>
    </>
  )
}

export default Body