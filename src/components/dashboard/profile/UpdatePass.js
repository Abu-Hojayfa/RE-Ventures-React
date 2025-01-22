import React, { useState } from 'react'
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function UpdatePass() {

    const [isHidden, setIsHidden] = useState(true);

    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800">Update Password</h3>
            <p className="text-sm text-gray-500 mb-6">
                Ensure your account is using a long, random password to stay secure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">


                <div>
                    <label className="block mt-2 text-sm font-medium text-gray-700">Current Password*</label>
                    <div className="relative">
                        <input placeholder="Enter old password"
                            required
                            type={isHidden ? "password" : "text"}
                            className="input mt-2 rounded-3xl input-bordered w-full "
                        />
                        <button
                            onClick={() => setIsHidden(!isHidden)}
                            className="absolute right-4 top-5"
                        >
                            {isHidden ? <IoEyeOff className='text-xl text-gray-500' /> : <IoEye className='text-xl text-gray-500' />}
                        </button>
                    </div>
                </div>


                <div>
                    <label className="block mt-2  text-sm font-medium text-gray-700">New Password*</label>
                    <div className="relative">
                        <input placeholder="Enter new password"
                            required
                            type={isHidden ? "password" : "text"}
                            className="input mt-2 rounded-3xl input-bordered w-full "
                        />
                        <button
                            onClick={() => setIsHidden(!isHidden)}
                            className="absolute right-4 top-5"
                        >
                            {isHidden ? <IoEyeOff className='text-xl text-gray-500' /> : <IoEye className='text-xl text-gray-500' />}
                        </button>
                    </div>
                </div>


                <div>
                    <label className="block mt-2  text-sm font-medium text-gray-700">Confirm Password*</label>
                    <div className="relative">
                        <input placeholder="Confirm password"
                            required
                            type={isHidden ? "password" : "text"}
                            className="input mt-2 rounded-3xl input-bordered w-full "
                        />
                        <button
                            onClick={() => setIsHidden(!isHidden)}
                            className="absolute right-4 top-5"
                        >
                            {isHidden ? <IoEyeOff className='text-xl text-gray-500' /> : <IoEye className='text-xl text-gray-500' />}
                        </button>
                    </div>
                </div>


            </div>

            <button
                className="btn mt-5 btn-primary text-white text-base rounded-3xl"
            >
                Update Password
            </button>


        </div>
    )
}
