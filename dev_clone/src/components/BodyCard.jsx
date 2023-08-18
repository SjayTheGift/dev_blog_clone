import { useState } from 'react'
import{ AiOutlineInfoCircle, AiOutlineSetting } from 'react-icons/ai'
import { SlOptions} from 'react-icons/sl'
import { BsFlag } from 'react-icons/bs'

import card_img from '../assets/card_img.png'

const BodyCard = () => {
    const [toggleBox, setToggleBox] = useState(false)

  return (
        <div className='shadow-sm border rounded-md px-5 py-4 md:relative z-[1] bg-white w-full'>
            <div className='flex justify-between items-center'>
                <p>Dev Community</p>
                <SlOptions className='cursor-pointer'  size={15} onClick={() => setToggleBox(!toggleBox)}/>
            </div>
            <div className={`shadow-sm border rounded-md px-2 py-2 ${toggleBox ? 'absolute top-10 right-5 z-[0] bg-white' :'hidden'} `}>
                <div className='flex flex-col justify-between items-center'>
                    <a className='flex hover:rounded-lg  p-2 px-4 cursor-pointer hover:bg-purple-rgba hover:text-[#4350e0] w-full'>
                        <span className='mr-2'><AiOutlineInfoCircle /></span> What's a billboard?
                    </a>
                    <a className='flex hover:rounded-lg my-1 p-2 px-4 cursor-pointer hover:bg-purple-rgba hover:text-[#4350e0] w-full'>
                        <span className='mr-2'><AiOutlineSetting /></span> Manage preferences
                    </a>
                    <div className='bg-gray-300 h-[2px] w-full mx-auto'></div>
                    <a className='flex hover:rounded-lg  p-2 px-4 cursor-pointer hover:bg-purple-rgba hover:text-[#4350e0] w-full'>
                        <span className='mr-2'><BsFlag /></span> Report billboard
                    </a>
                </div>
            </div>

            <div className='mt-2'>
                <img src={card_img} className='object-scale-down'/>
                <p className='font-bold text-xl my-4'>Need to stay up-to-date with the most relevant trends in software, such as AI, cloud computing, and all things frontend?</p>
                <p className='my4'>Look no further.</p>
                <p className='my-4'>You can do so much more once you <span className='font-bold'>create your account.</span> Follow the devs and topics you care about, and keep up-to-date.</p>
                
                <a className='flex hover:rounded-lg cursor-pointer text-[#4350e0] w-[150px] underline my-4'>
                    <span className='font-bold text-2xl'>Start now</span> 
                </a>
                <p className='my-4'>Happy coding ❤️</p>
            </div>
            
           
    </div>
  )
}

export default BodyCard