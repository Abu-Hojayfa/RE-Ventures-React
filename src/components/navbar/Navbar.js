import React from 'react'
import logo from '../assests/logos/image.png';
import { VscAccount } from "react-icons/vsc";
import { SiBookstack } from "react-icons/si";
import './Navbar.css'
export default function Navbar() {
    return (
        <div className='w-5/6 mx-auto nav'>

            <div className="navbar bg-base-100">

                {/* responsive part */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a className='text-lg'>Home</a></li>
                            <li><a className='text-lg'>Properties</a></li>
                            <li><a className='text-lg'>Listings</a></li>
                            <li>
                                <details>
                                    <summary className='text-lg'>Pages</summary>
                                    <ul className="p-2">
                                        <li><a className='text-sm'>About</a></li>
                                        <li><a>Contact</a></li>
                                        <li><a>Blog</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a className='text-lg'>Dashboard</a></li>
                        </ul>
                    </div>
                    <img className="w-40" src={logo} alt='RE' />
                    <a className="btn btn-ghost text-xl">RE Ventures</a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='text-lg'>Home</a></li>
                        <li><a className='text-lg'>Properties</a></li>
                        <li><a className='text-lg'>Listings</a></li>
                        <li>
                            <details>
                                <summary className='text-lg' >Pages</summary>
                                <ul className="p-2 px-4">
                                    <li><a>About</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>Blog</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className='text-lg'>Dashboard</a></li>
                    </ul>
                </div>

                <div className="navbar-end mr-4">
                    <a className="btn bg-white font-black font-semibold text-lg border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white">
                        <VscAccount className='text-2xl' /> Sign in</a>
                </div>

                <div className="navbar-start">
                    <a className="btn btn-primary rounded-2xl text-white font-semibold text-lg  rounded-3xl">
                        <SiBookstack className='text-2xl'  />
                        Submit Properties</a>
                </div>
            </div>

        </div>
    )
}
