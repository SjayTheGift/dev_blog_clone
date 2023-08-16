import React from 'react'

import CardRightSideBar from './CardRightSideBar'

const RightSideBar = () => {
    // console.log(("b" + "a" + + "a" + "a").toLowerCase())
  return (
    <>
    <div className='w-400px hidden lg:block'>

    
      <div className='shadow-m rounded-md px-5 pt-5 pb-3 mb-4 bg-white'>
        <div className='flex justify-between items-center mb-4'>
            <p className='font-bold text-gray-600 text-xl'>Listings</p>
            <a href='#' className='text-[#4350e0]'>See all</a>
        </div>

        <div className='border-t border-t-gray-100  px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                50 High Quality Developer Jobs as Top VC Funded Startups 
                in our Free Weekly Newsletter
            </a>
            <p className='mt-3 text-sm'>misc</p>
        </div>

        <div className='border-t border-t-gray-100   px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                How to Code with Java -Guide
            </a>
            <p className='mt-3 text-sm'>education</p>
        </div>
        <div className='border-t border-t-gray-100   px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                OpenSource Alternative to Postman
            </a>
            <p className='mt-3 text-sm'>collabs</p>
        </div>
        <div className='border-t border-t-gray-100  px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                Supercharge your application performance: Consuming
                Symfony messenger messages with Go 
            </a>
            <p className='mt-3 text-sm'>products</p>
        </div>
        <div className='border-t border-t-gray-100   px-1 pt-4 pb-2 text-gray-500'>
            <a href='#' className='hover:text-[#4350e0] text-md'>
                Publish your developer story or read developer new
            </a>
            <p className='mt-3 text-sm'>education</p>
        </div>
        <a href='#' className='flex text-center items-center text-gray-600 hover:text-[#4350e0] border-t border-t-gray-100 w-full'>
            <span className='w-full mt-2 font-semibold'>Create a Listings</span>
             
        </a>
      </div>

      <div className='shadow-m rounded-md px-5 pt-5 pb-3 bg-white'>
        <div className='flex justify-between items-center'>
            <p className='font-bold cursor-pointer text-gray-600 hover:text-[#4350e0] text-xl'>#discuss</p>
        </div>
            <CardRightSideBar extra={'19 comments'} name={'Music Monday -- What are you listening to? (Niche Edition)'}/>
            <CardRightSideBar extra={'15 comments'} name={'You won\'t be able to answer this simple JavaScript question!'}/>
            <CardRightSideBar extra={'29 comments'} name={'Meme Monday'}/>
            <CardRightSideBar extra={'7 comments'} name={'Ctrl+Z to the Past: Time-Traveling to Your First Code Line'}/>
            <CardRightSideBar extra={'9 comments'} name={'How Do you Handle Self-Doubt in Coding?'}/>
      </div>

      <div className='shadow-m rounded-md px-5 pt-5 pb-3 bg-white'>
        <div className='flex justify-between items-center'>
            <p className='font-bold cursor-pointer text-gray-600 hover:text-[#4350e0] text-xl'>#watercooler</p>
        </div>
            <CardRightSideBar extra={'29 comments'} name={'Meme Monday'}/>
            <CardRightSideBar extra={'19 comments'} name={'Music Monday -- What are you listening to? (Niche Edition)'}/>         
            <CardRightSideBar extra={'7 comments'} name={'Ctrl+Z to the Past: Time-Traveling to Your First Code Line'}/>
            <CardRightSideBar extra={'New'} name={'You won\'t be able to answer this simple JavaScript question!'}/>
            <CardRightSideBar extra={'6 comments'} name={"What\'s Your Favorite Outdated School 'Tech' Gadget?"}/>
      </div>


      <div className='mt-4'>
        <p className='font-bold'>trending guides/resources</p>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>How we improved our Serverless API 300x</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>The Key to Passing your AWS Solution Architect Professional!!!</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Stop using Swagger-UI and MSW but SDK instead</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>13 CSS Tricks that will give you an adrenaline rush🤯</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Top 7 things That kill Developer Productivity</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Microservice vs Micro Frontends: <br/> What's the Difference?</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Designing API's for human: Design patterns</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>🔥Build an email automation system with react Flow and Resend🎉</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Common design patterns at Stripe</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>SOLID:Single Responsibility Principle With Examples</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Spicing Up AWS Architecture Diagram: A Step-by-Step Guide To Creating Animated AWS Architecture GIFs</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>The Magic of Empty Git Commit</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Real DOM, Virtual DOM, Shadow DOM, What's the Difference?</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Power Automate Documentation by GPT</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>A Guide to Perfecting Pull Requests</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>GPT Web App Generator - Let AI create a full-stack React & Nodejs codebase based on your description🤖🤯</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>JSON vs JSONB in PostgreSQL</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Best Animation Libraries For React🎉</p>
            </div>

            
      </div>

      <div className='w-full border-t border-t-gray-500 my-[20px]'></div>

      <div className='mt-6'>
        <p className='font-bold'>recently queried</p>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>VSCode vs Vim</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>&Nbsp Meaning</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Atom Text Editor</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Slack Screen Sharing</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Git Delete Local Branch</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Working from Home</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>SSH Permission Denied (Publickey)</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Bootstrap 4 Contact Form</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>CSS Text Outline</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Python \N</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Binary to Decimal Java</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Download Documentation</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>React Native Build APK</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>SSH Agent Forwarding</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>SQL Workbench Download</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Button Animation CSS</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>JavaScript Interview Questions and Answers</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>Haiku Checker</p>
            </div>
            <div className='px-5 py-3 cursor-pointer hover:bg-white hover:text-[#4350e0] my-2'>
                <p>GCC for Windows</p>
            </div>
        
        <div className='w-full border-t border-t-gray-500 my-[20px]'></div>
            
      </div>

      </div>
    </>
  )
}

export default RightSideBar
