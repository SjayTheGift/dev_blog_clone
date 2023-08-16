import { useState } from 'react'
import
{ AiFillFacebook, 
    AiOutlineTwitter, 
    AiFillGithub, 
    AiFillInstagram, 
    AiOutlineInfoCircle, 
    AiOutlineSetting,
    AiOutlineClose,
} 
from 'react-icons/ai'
import { FiTwitch} from 'react-icons/fi'
import { BsMastodon, BsFlag} from 'react-icons/bs'
import { SlOptions} from 'react-icons/sl'

import GreyButton from './GreyButton'
import Tags from './Tags'


import {
    HomeIcon,
    ListingsIcon,
    PodcastsIcon,
    VideosIcon,
    TagsIcon,
    FaqIcon,
    ForemShopIcon,
    AdvertiseIcon,
    ContactIcon,
    GuidesIcon,
    SoftwareIcon,
    SharpIcon,
    NerdIcon,
    TermsIcon,
    AboutIcon
} from '../icons/icons'

import sidebar_img_1 from '../assets/../assets/sidebar_img_1.jpg'
import sidebar_img_2 from '../assets/../assets/sidebar_img_2.png'

const Sidebar = ({nav, setNav}) => {

    const [showBox, setShowBox] = useState(false)
    const [showBoxSecond, setShowBoxSecond] = useState(false)
    

  return (
    <>
    <div className={`fixed top-0 w-[300px] z-[11]  ${nav ? 'left-0 opacity-100 overflow-y-auto h-screen bg-[#f5f5f5]': 'left-[-1000%] opacity-0'} md:opacity-100 md:static`}> 
        <div className='block md:hidden'>
            <div className='flex justify-between px-5 py-4 items-center'>
                <p className='font-bold'>Dev Community</p>
                <button onClick={() => setNav(!nav)} className='hover:bg-purple-rgba p-2 hover:text-[#4350e0] rounded-md'>
                    <AiOutlineClose size={20} className='cursor-pointer' />
                </button>
            </div>
        </div>
        <div className='shadow-sm border rounded-md px-5 py-4'>
            <h3 className='font-bold text-black text-xl'>DEV Community is a community of 1,120,498 amazing developers</h3>
            <p className='text-black my-2'>We're a place where coders share, stay up-to-date and grow their careers.</p>
            <a href='#' className='flex justify-center rounded-lg border border-[#4350e0] p-2 px-4 text-md mb-1 font-bold cursor-pointer hover:bg-[#4350e0] text-[#4350e0] hover:text-white hover:underline'>
                <span>Create account</span>
            </a>
            <a href='#' className='flex justify-center hover:rounded-lg  p-2 px-4 cursor-pointer hover:bg-purple-rgba hover:text-[#4350e0] hover:underline'>
               <span>Log in</span> 
            </a>
        </div>
        <div className='w-full flex flex-col gap-2 my-4'>
                <GreyButton icon={<HomeIcon />} name={'Home'} />
                <GreyButton icon={<ListingsIcon />} name={'Listings'} />
                <GreyButton icon={<PodcastsIcon />} name={'Podcasts'} />
                <GreyButton icon={<VideosIcon />} name={'Videos'} />
                <GreyButton icon={<TagsIcon />} name={'Tags'} />
                <GreyButton icon={<FaqIcon />} name={'FAQ'} />
                <GreyButton icon={<ForemShopIcon />} name={'Forem Shop'} />
                <GreyButton icon={<AdvertiseIcon />} name={'Advertise on DEV'} />
                <GreyButton icon={<AboutIcon />} name={'About'} />
                <GreyButton icon={<ContactIcon />} name={'Contact'} />
                <GreyButton icon={<GuidesIcon />} name={'Guides'} />
                <GreyButton icon={<SoftwareIcon />} name={'Software comparisons'} />
           
            </div>
            <p className='my-2 font-bold'>Other</p>
            <div className='flex flex-col'>
                <GreyButton icon={<SharpIcon />} name={'Code of Conduct'} />
                <GreyButton icon={<NerdIcon />} name={'Privacy Policy'} />
                <GreyButton icon={<TermsIcon />} name={'Terms of Use'} />
            </div>

            <div className='flex gap-1 my-2 px-2'>
                <a href='#' className='text-gray-700 hover:bg-purple-rgba p-2 hover:text-[#4350e0]'>
                    <AiOutlineTwitter size={25} />
                </a>
                <a href='#' className='text-gray-700 hover:bg-purple-rgba p-2 hover:text-[#4350e0]'>
                    <AiFillFacebook size={25} />
                </a>
                <a href='#' className='text-gray-700 hover:bg-purple-rgba p-2 hover:text-[#4350e0]'>
                    <AiFillGithub size={25} />
                </a>
                <a href='#' className='text-gray-700 hover:bg-purple-rgba p-2 hover:text-[#4350e0]'>
                    <AiFillInstagram size={25}/>
                </a>
                <a href='#' className='text-gray-700 hover:bg-purple-rgba p-2 hover:text-[#4350e0]'>
                    <FiTwitch size={25} />
                </a>
                <a href='#' className='text-gray-700 hover:bg-purple-rgba p-2 hover:text-[#4350e0]'>
                    <BsMastodon size={25} />
                </a>
            </div>
            <p className='my-2 font-bold hidden md:block'>Popular Tags</p>
            <div class="overflow-y-auto h-80 my-2 py-3 px-2 hidden md:block">
                <Tags />
            </div>

            <div className='shadow-sm border rounded-md px-5 py-4 hidden md:block md:relative z-[1] bg-white'>
                <div className='flex justify-between items-center'>
                    <p>Dev Community</p>
                    <SlOptions className='cursor-pointer'  size={15} onClick={() => setShowBox(!showBox)}/>
                </div>
                <div className={`shadow-sm border rounded-md px-2 py-2 ${showBox ? 'absolute top-10 right-5 z-[0] bg-white' :'hidden'} `}>
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

                <img src={sidebar_img_1} className='z-[0]'/>
                <a className='flex hover:rounded-lg  p-2 px-4 cursor-pointer hover:bg-purple-rgba text-[#4350e0] w-full underline'>
                    <span className=''>Create An Account on DEV.</span> 
                </a>
            </div>

            <div className='shadow-sm border rounded-md my-2 px-5 py-4 z-[1] bg-white hidden md:block md:relative'>
                <div className='flex justify-between items-center'>
                    <p>Dev Community</p>
                    <SlOptions className='cursor-pointer'  size={15} onClick={() => setShowBoxSecond(!showBoxSecond)}/>
                </div>
                <div className={`shadow-sm border rounded-md px-2 py-2 ${showBoxSecond ? 'absolute top-10 right-5 z-[0] bg-white' :'hidden'} `}>
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

                <img src={sidebar_img_2} className='z-[0] my-4'/>

            </div>

            <div className='mb-3 hidden md:block'>
                <p className='text-sm'><a href='https://dev.to/' target='_blank' className='text-[#4350e0]'>DEV Community</a> A constructive and inclusive social network for software developers. With you every step of your journey.</p>
                <p className='text-sm my-3'>Built on <a href='https://www.forem.com/' target='_blank' className='text-[#4350e0]'>Forem </a> — the  
                    <a href='https://dev.to/t/opensource' target='_blank' className='text-[#4350e0]'> open source</a> software that powers 
                    <a href='https://dev.to/' target='_blank'>DEV</a> and other inclusive communities.
                </p>
                <p className='text-sm'>Made with love and <a href='https://dev.to/t/rails' target='_blank' className='text-[#4350e0]'>Ruby on Rails.</a> DEV Community © 2016 - 2023.</p>
            </div>
        </div>
    </>
  )
}

export default Sidebar