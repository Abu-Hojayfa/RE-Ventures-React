import React, { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function UpdatePass() {
    const [isHidden, setIsHidden] = useState(true);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the passwords
        if (!currentPassword || !newPassword || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match.');
            return;
        }

        // Reset error before API call
        setError('');

        try {
            // Send request to the backend API to update the password
            const response = await fetch('https://http://localhost:8080/users/updatePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,  // Include token for authentication
                },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Password updated successfully!');
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
            } else {
                setError(data.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setError('Network error. Please try again later.');
        }
    };

    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800">Update Password</h3>
            <p className="text-sm text-gray-500 mb-6">
                Ensure your account is using a long, random password to stay secure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Current Password Field */}
                <div>
                    <label className="block mt-2 text-sm font-medium text-gray-700">Current Password*</label>
                    <div className="relative">
                        <input 
                            type={isHidden ? "password" : "text"}
                            className="input mt-2 rounded-3xl input-bordered w-full"
                            placeholder="Enter old password"
                            required
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <button
                            onClick={() => setIsHidden(!isHidden)}
                            className="absolute right-4 top-5"
                        >
                            {isHidden ? <IoEyeOff className='text-xl text-gray-500' /> : <IoEye className='text-xl text-gray-500' />}
                        </button>
                    </div>
                </div>

                {/* New Password Field */}
                <div>
                    <label className="block mt-2  text-sm font-medium text-gray-700">New Password*</label>
                    <div className="relative">
                        <input 
                            type={isHidden ? "password" : "text"}
                            className="input mt-2 rounded-3xl input-bordered w-full"
                            placeholder="Enter new password"
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button
                            onClick={() => setIsHidden(!isHidden)}
                            className="absolute right-4 top-5"
                        >
                            {isHidden ? <IoEyeOff className='text-xl text-gray-500' /> : <IoEye className='text-xl text-gray-500' />}
                        </button>
                    </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                    <label className="block mt-2  text-sm font-medium text-gray-700">Confirm Password*</label>
                    <div className="relative">
                        <input 
                            type={isHidden ? "password" : "text"}
                            className="input mt-2 rounded-3xl input-bordered w-full"
                            placeholder="Confirm password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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

            {/* Error and Success Messages */}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            {success && <p className="text-green-500 text-center mt-4">{success}</p>}

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                className="btn mt-5 btn-primary text-white text-base rounded-3xl"
            >
                Update Password
            </button>
        </div>
    );
}
