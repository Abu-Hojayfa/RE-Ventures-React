import React from "react";
import profile from '../../../assests/agents/agent-2.jpg'

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


                <form class="flex my-8 items-center space-x-6">
                    <div class="shrink-0">
                        <img class="h-16 w-16 object-cover rounded-full" src={profile} alt="Profile" />
                    </div>
                    <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input type="file" className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50
                        file:text-blue-700
                        hover:file:bg-blue-100
                            "/>
                    </label>
                </form>

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
