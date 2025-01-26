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
