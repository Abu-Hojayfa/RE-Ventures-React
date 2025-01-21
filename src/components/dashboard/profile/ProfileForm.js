import React from "react";

const ProfileForm = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800">Profile</h3>
            <p className="text-sm text-gray-500 mb-6">
                This information will be displayed publicly, so be careful what you share.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            workcation.com/
                        </span>
                        <input
                            type="text"
                            name="username"
                            className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">About</label>
                    <textarea
                        name="about"
                        rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-2">
                        Write a few sentences about yourself.
                    </p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex items-center">
                        <span className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>
                        <button
                            type="button"
                            className="ml-4 btn btn-outline btn-primary"
                        >
                            Change
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileForm;
