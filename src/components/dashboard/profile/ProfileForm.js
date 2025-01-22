import React from "react";

const ProfileForm = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800">Profile</h3>
            <p className="text-sm text-gray-500 mb-6">
                This information will be displayed publicly, so be careful what you share.
            </p>
            <div className="">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <span className="inline-flex items-center px-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-500 sm:text-base">
                        Jone Doe
                    </span>
                </div>


                <div className="py-10">
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 md:flex items-center gap-6">
                        <span className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </span>

                        
                            <input
                                type="file"
                                className="file-input file-input-bordered ml-8  rounded-3xl w-3/5  max-w-xs" />
                        

                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">About</label>
                    <p className="text-sm mb-1 text-gray-500 mt-2">
                        Write a few sentences about yourself.
                    </p>
                    <textarea
                        placeholder="About yourself"
                        className="textarea mt-2 text-base textarea-bordered w-full rounded-2xl max-w-lg h-40"
                        rows="8"
                        cols="50"
                    />


                </div>


            </div>
        </div>
    );
};

export default ProfileForm;
