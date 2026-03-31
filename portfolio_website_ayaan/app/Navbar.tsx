"use client"
import React from 'react'
import Link from 'next/link'
import {useState, useEffect } from "react";

export default function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = () =>{
            if(window.scrollY > 50) {
                setIsScrolled(true);
            }else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)

        
    }
    )
    return (
    <div
    className={`flex items-center justify-center h-13 p-5 font-[Basic] fixed top-0 left-0 w-full z-50 transition-all duration-300 
    ${isScrolled
        ? "bg-white/70 backdrop-blur-md shadow-sm text-black"
        : "bg-transparent"
    }`}>
        <Link href='/' className='text-[25px] text-[#FF7A30] font-extrabold'>Ayaan Karkera</Link>
    </div>
  )
}
