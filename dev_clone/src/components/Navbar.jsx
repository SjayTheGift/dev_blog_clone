import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import dev_logo from '../assets/dev_logo.png'

import SearchInput from './SearchInput';


const Navbar = ({nav, setNav}) => {
  
  // const [textColor, setTextColor] = useState('white');
  // background-color: rgb(243 244 246 / var(--tw-bg-opacity));

  useEffect(() => {
  
  }, []);

  return (
    <div className={` bg-white shadow-sm w-full h-auto fixed top-0 z-[5] transition-all duration-500 `}>
      <div className='w-full lg:w-[80%] mx-auto flex justify-between items-center px-2 sm:px-5'>
            <div onClick={() => setNav(!nav)} className='text-2xl cursor-pointer md:hidden mr-2 hover:bg-purple-rgba p-2 hover:text-[#4350e0] rounded-md'>
            <AiOutlineMenu />
            </div>
            <div className='flex gap-4 items-center flex-auto'>
                <div className=''>
                    <a>
                        <img src={dev_logo} width='55px'  className='w-[45px] sm:w-[55px] cursor-pointer' />
                    </a>
                </div>
            
                <div className='w-full hidden md:block'>
                    <SearchInput />
                </div>
            </div>
        

            <ul className='flex items-center gap-2 my-2'>
                <li className='md:hidden'>
                    <button className="cursor-pointer p-2.5 rounded-md text-black hover:bg-purple-rgba hover:text-[#4350e0] ">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                    </button>
                </li>
                <li className='hidden md:block'>
                    <a href='#' className='flex hover:rounded-lg  p-2 px-4 cursor-pointer hover:bg-purple-rgba hover:text-[#4350e0] hover:underline'>
                        Log in
                    </a>
                </li>
                
                <li>
                <a href='#' className='flex rounded-lg border border-[#4350e0] p-2 px-4 text-sm md:text-[16px] font-medium cursor-pointer hover:bg-[#4350e0] text-[#4350e0] hover:text-white hover:underline'>
                    Create account
                </a>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;