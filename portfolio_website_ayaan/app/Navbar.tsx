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
        ? "bg-[#111317]/80 backdrop-blur-md shadow-lg text-white border-b border-white/5"
        : "bg-transparent"
    }`}>
        <Link href='/' className='text-[25px] text-[#00E5FF] hover:text-[#00B4CC] transition-colors font-extrabold tracking-tight drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]'>Ayaan Karkera</Link>
    </div>
  )
}
