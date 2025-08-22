'use client'

import Link from 'next/link'
import React from 'react';
import { usePathname } from 'next/navigation';
import { PiBriefcase } from "react-icons/pi";

const Navbar = () => {
    const pathname = usePathname();
    
    return (
        <div className='flex justify-center items-center max-width-[1600px] py-[20px] mx-auto relative'>
            <div className='rounded-4xl p-3 bg-[hsla(158, 23%, 18%, .7)] backdrop-blur-md fixed top-4 z-50'>
                <ul className='flex gap-2 text-[16px] font-semibold'>
                    <Link 
                        href={'/'} 
                        className={`rounded-full ps-5 pe-4 py-2 backdrop-blur-md flex items-center gap-2 ${
                            pathname === '/' 
                                ? 'bg-[#01184A] text-white border border-[#01184A] shadow-2xl' 
                                : 'hover:bg-[#01184A] hover:text-white transition-colors'
                        }`}
                    >
                        <span>Work</span>
                        <div className={`text-xs px-1 rounded-sm font-bold border text-[#01184A] border-[#01184aa4] ${
                            pathname === '/' 
                                ? 'border-white text-white border shadow-2xl' 
                                : 'hover:bg-[#01184A] hover:text-white transition-colors'
                        }`}>
                            /
                        </div>
                    </Link>
                    <Link 
                        href={'/about'} 
                        className={`rounded-full px-5 py-2 backdrop-blur-md ${
                            pathname === '/about' 
                                ? 'bg-[#01184A] text-white border border-[#01184A] shadow-2xl' 
                                : 'hover:bg-[#01184A] hover:text-white transition-colors'
                        }`}
                    >
                        About
                    </Link>
                    <Link 
                        href={'/contact'} 
                        className={`rounded-full px-5 py-2 backdrop-blur-md hidden ${
                            pathname === '/contact' 
                                ? 'bg-[#01184A] text-white border border-[#01184A] shadow-2xl' 
                                : 'hover:bg-[#01184A] hover:text-white transition-colors'
                        }`}
                    >
                        Contact
                    </Link>

                        <Link 
                        href={'/images/Francis_Tsetse_Ocrah_Portfolio.pdf'} 
                        target='_blank'
                        className={`rounded-full px-5 py-2 backdrop-blur-md ${
                            pathname === '/resume' 
                                ? 'bg-[#01184A] text-white border border-[#01184A] shadow-2xl' 
                                : 'hover:bg-[#01184A] hover:text-white transition-colors'
                        }`}
                    >
                        Resume
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar