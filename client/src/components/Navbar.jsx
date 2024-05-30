import React from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants";
import { useState } from 'react';
import {Menu ,X} from "lucide-react";

export default function Navbar() {
    const [menuBarToggle,setMenuBarToggle] =useState(false);

    const toggleNavbar = () =>{
        setMenuBarToggle(!menuBarToggle);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                <img src={logo} alt="logo"  className='h-10 w-10 mr-2'/>
                <span className='text-xl tracking-tight'>VirtualAura</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item,index) =>(
                        <li key={index} className='hover:text-sky-400'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md hover:border-orange-700 hover:text-red-300 hover:border-1'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-sky-500 to-sky-800 py-2 px-3 rounded-md hover:text-slate-300 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-500'>Create an account</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end ">
                    <button onClick={toggleNavbar} className='duration-200 items-center'>
                        {menuBarToggle ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {menuBarToggle && (
                <div className="fixed left-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center  lg:hidden">
                    <ul>
                        {navItems.map((item,index) =>(
                            <li key={index} className='py-4 hover:text-orange-600'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex space-x-6 shrink-0'>
                        <a href="#" className='py-2 px-3 border rounded-md shrink-0 hover:border-orange-700  hover:bg-cyan-400 hover:text-red-900 duration-150'>
                            Sign In
                        </a>
                        <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-sky-500 to-sky-800 shrink-0 hover:text-slate-300 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-500 duration-150'>
                            Create an account
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}
