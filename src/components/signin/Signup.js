import React, { useState } from 'react';
import logo from "../../assests/logos/image.png";
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }

        setError('');

        try {
            const response = await fetch('http://localhost:8080/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                setError(data.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setError('Network error. Please try again later.');
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center px-6 mx-auto mb-10">
                <a href="/" className="justify-center items-center mb-8 text-2xl font-semibold lg:mb-10">
                    <img src={logo} className="mr-4 h-36" alt="Logo" />
                </a>
                <div className="p-10 pt-0 w-full max-w-lg bg-base-100 rounded-2xl shadow-xl shadow-gray-300">
                    <div className="space-y-8">
                        {/* Create Account Section */}
                        <h2 className="text-2xl font-bold text-base-content">Create Account</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
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
                                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-base-content">
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

                        {/* Sign In Section */}
                        <h2 className="text-2xl font-bold text-base-content mt-8">Sign in to platform</h2>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-base-content">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="input input-bordered w-full rounded-lg active:outline-[#1563df]"
                                    required
                                />
                            </div>
                            <div className="flex items-start justify-between">
                                <div className="form-control">
                                    <label className="cursor-pointer label py-0">
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                            className="checkbox checkbox-primary rounded-2xl mr-2 [--chkfg:white]"
                                        />
                                        <span className="label-text">Remember me</span>
                                    </label>
                                </div>
                                <a href="#!" className="text-sm text-primary hover:underline">
                                    Lost Password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-full text-white bg-[#1563DF] text-lg rounded-lg"
                            >
                                Login to your account
                            </button>
                            <div className="text-sm font-medium text-base-content text-center">
                                Not registered?{" "}
                                <Link to="/signup" className="text-primary hover:underline">
                                    Create account
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
