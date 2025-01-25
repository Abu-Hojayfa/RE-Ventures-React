import React from 'react'
import logo from "../../assests/logos/image.png"
import { Link } from 'react-router-dom'


export default function Signup() {
    return (
        <div>

            <div className="flex flex-col justify-center items-center px-6 mx-auto mb-10">
                <a href="/" className="justify-center pb-2 items-center mb-8 text-2xl font-semibold lg:mb-10">
                    <img src={logo} className="mr-4 h-36" alt=" Logo" />
                </a>
                {/* Card */}
                <div className="p-10 pt-0 w-full max-w-lg bg-base-100 rounded-2xl shadow-xl shadow-gray-300">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-base-content">Create Account</h2>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            <a
                                href="#!"
                                className="inline-flex justify-center w-full px-5 py-2.5 text-sm font-medium text-blue-600 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#!"
                                className="inline-flex justify-center w-full px-5 py-2.5 text-sm font-medium text-red-600 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 488 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#!"
                                className="inline-flex justify-center w-full px-5 py-2.5 text-sm font-medium text-blue-500 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
                            >
                                <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <form className="mt-8 space-y-6">
                            <div className="grid grid-cols-2 gap-4 items-center justify-end">
                                <div className=''>
                                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-base-content">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        className="input input-bordered w-full rounded-lg"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className=" mb-2 text-sm font-medium text-base-content">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        className="input input-bordered w-full rounded-lg"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-base-content">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="input input-bordered w-full rounded-lg"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-base-content">
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full rounded-lg active:outline-[#1563df]"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-base-content">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full rounded-lg active:outline-[#1563df]"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-full text-white bg-[#1563DF] text-lg rounded-lg">
                                Create account
                            </button>
                            <div className="text-sm font-medium text-base-content">
                                already have an Account?{" "}
                                <Link to="/signin" className="text-primary hover:underline">
                                    Sign In
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}
