import React from "react";
import logo from "../../assests/logos/image.png";
import { VscAccount } from "react-icons/vsc";
import { SiBookstack } from "react-icons/si";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ hideHeaderFooter }) {
    const conditioningOfHeader = hideHeaderFooter === undefined || hideHeaderFooter;
    return (
        <div className={`nav ${conditioningOfHeader ? "w-full" : "w-5/6 mx-auto"}`}>
            <div className="navbar bg-base-100">
                {/* Responsive Part */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/">
                                    <span className="text-lg">Home</span>
                                </Link>
                            </li>
                            <li>
                                <span className="text-lg">Properties</span>
                            </li>
                            <li>
                                <span className="text-lg">Listings</span>
                            </li>
                            <li>
                                <details>
                                    <summary className="text-lg">Pages</summary>
                                    <ul className="p-2 w-52">
                                        <li>
                                            <span>About Us</span>
                                        </li>
                                        <li>
                                            <Link to="/our-services">Our Services</Link>
                                        </li>
                                        <li>
                                            <span>Contact Us</span>
                                        </li>
                                        <li>
                                            <span>Blog</span>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-lg">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <img className="w-40" src={logo} alt="RE" />
                    <Link to="/" className={`btn btn-ghost text-xl ${conditioningOfHeader ? "mr-56" : ""}`}>
                        RE Ventures
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">
                                <span className="text-lg">Home</span>
                            </Link>
                        </li>
                        <li>
                            <span className="text-lg">Properties</span>
                        </li>
                        <li>
                            <span className="text-lg">Listings</span>
                        </li>
                        <li>
                            <details>
                                <summary className="text-lg">Pages</summary>
                                <ul className="p-2 w-52">
                                    <li>
                                        <span>About Us</span>
                                    </li>
                                    <li>
                                        <Link to="/our-services">Our Services</Link>
                                    </li>
                                    <li>
                                        <span>Contact Us</span>
                                    </li>
                                    <li>
                                        <span>Blog</span>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link to="/dashboard" className="text-lg">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end mr-4">
                    <Link
                        to="/signin"
                        className="btn bg-white text-base border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white"
                    >
                        <VscAccount className="text-2xl" /> Sign in
                    </Link>
                </div>

                <div className="navbar-start">
                    <a
                        href="#!"
                        className="btn btn-primary text-white text-base rounded-3xl"
                    >
                        <SiBookstack className="text-2xl" />
                        Submit Properties
                    </a>
                </div>
            </div>
        </div>
    );
}
