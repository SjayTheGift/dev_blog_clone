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

const BlogCard = ({post}) => {
  return (
    <div className='mt-5 shadow-sm border rounded-md px-5 py-4 md:relative z-[1] bg-white'>
        <div className='flex gap-1 cursor-pointer'>
            <img src={post.user.image} width='35px' className='rounded-full border w-[40px] h-auto'/>
            <div className='cursor-pointer'>
                <p className='text-gray-500 font-semibold leading-none'>{post.user.name}</p>
                <span className='text-sm text-gray-500 leading-none'>Aug 16</span>
            </div>
        </div>
        <div className='mt-4 mb-1 sm:ml-11 cursor-pointer'>
            <h3 className='text2xl font-bold hover:text-[#4350e0]'>{post.title}</h3>
        </div>
        <ul className='flex flex-wrap gap-2 sm:gap-5 sm:ml-10 sm:mb-2'>
            {post.tags.map((tag, index) => 
                <div key={index}>
                    <a className={`cursor-pointer px-1 py-1 ${tag.bgColor} rounded-md border border-white ${tag.borderColor} flex`} >
                        <span className={tag.color}>#</span>{tag.name}
                    </a>
                </div>
            )}
                
        </ul>
        <div className='flex flex-wrap justify-between items-center sm:ml-11'>
            <div className='flex gap-1 px-2 py-2 cursor-pointer rounded-md hover:bg-purple-rgba'>
                <SparkleHeartIcon/>
                <MultiUnicornIcon />
                <ExplodingHeadIcon />
                <RaisedHandsIcon />
                <FireIcon />
                <p className='flex items-center gap-1'>{post.reaction} <span className='hidden sm:block'>reactions</span></p>
            </div>
            
            <div className='flex items-center gap-2 px-2 py-2 cursor-pointer rounded-md hover:bg-purple-rgba'>
                <CommentsIcon />
                <p className='flex items-center gap-1'>{post.comments_count == 0 ? 'Add' : post.comments_count} 
                <span className='hidden sm:block'>comment{post.comments_count > 1 ? 's' : ''}</span></p>
            </div>
            <div className='flex items-center gap-2'>
                <p>{post.reading_time_minutes} min read</p>
                <a href='#' className='cursor-pointer px-3 py-3 rounded-md hover:bg-purple-rgba'><GrBookmark/></a>
            </div>
        </div>
    </div>
  )
}

export default BlogCard