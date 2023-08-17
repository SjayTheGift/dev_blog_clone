import React from 'react'
import { GrBookmark } from 'react-icons/gr'

import { CommentsIcon } from '../icons/icons'
import { 
    FireIcon, 
    ExplodingHeadIcon, 
    MultiUnicornIcon, 
    RaisedHandsIcon, 
    SparkleHeartIcon } 
from '../icons/reactions'

import user from '../assets/users_img/user_1.webp'

const BlogCard = () => {
  return (
    <div className='mt-5 shadow-sm border rounded-md px-5 py-4 md:relative z-[1] bg-white'>
        <div className='flex gap-1 cursor-pointer'>
            <img src={user} width='35px' className='rounded-full w-[40px] h-auto'/>
            <div className='cursor-pointer'>
                <p className='text-gray-500 font-semibold leading-none'>Leonardo Montini</p>
                <span className='text-sm text-gray-500 leading-none'>Aug 16</span>
            </div>
        </div>
        <div className='mt-4 mb-1 sm:ml-11'>
            <h3 className='text2xl font-bold hover:text-[#4350e0]'>Add Labels to PRs with a Typescript GitHub Action</h3>
        </div>
        <ul className='flex gap-5 sm:ml-10 mb-2'>
                <div>
                    <a className='cursor-pointer px-1 py-1 hover:bg-red-800/10 rounded-md border border-white hover:border-red-800'>
                        #github
                    </a>
                </div>
        </ul>
        <div className='flex flex-wrap justify-between items-center sm:ml-11'>
            <div className='flex gap-1 px-2 py-2 cursor-pointer rounded-md hover:bg-purple-rgba'>
                <SparkleHeartIcon/>
                <MultiUnicornIcon />
                <ExplodingHeadIcon />
                <RaisedHandsIcon />
                <FireIcon />
                <p className='flex items-center gap-1'>9 <span className='hidden sm:block'>reactions</span></p>
            </div>
            
            <div className='flex items-center gap-2 px-2 py-2 cursor-pointer rounded-md hover:bg-purple-rgba'>
                <CommentsIcon />
                <p className='flex items-center gap-1'>2 <span className='hidden sm:block'>comments</span></p>
            </div>
            <div className='flex items-center gap-2'>
                <p>6 min read</p>
                <a href='#' className='cursor-pointer px-3 py-3 rounded-md hover:bg-purple-rgba'><GrBookmark/></a>
            </div>
        </div>
    </div>
  )
}

export default BlogCard