import React from 'react'
import ProfileForm from './ProfileForm.js'
import PersonalInfoForm from './PersonalInfoForm.js'
import UpdatePass from './UpdatePass.js'

export default function Profile() {
    return (
        <div className="p-6 bg-white rounded-md shadow-md">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">User Settings</h1>
                <div className="bg-white rounded-lg shadow p-6">
                    <ProfileForm />
                </div>
                <div className="bg-white rounded-lg shadow p-6 mt-8">
                    <PersonalInfoForm />
                </div>
                

                <div className="bg-white rounded-lg shadow p-6 mt-8">
                    <UpdatePass />
                </div>

                <div className="flex gap-4 mt-8">
                    <button
                        className="btn bg-white text-base border-[#1563DF] rounded-3xl hover:bg-[#1563DF] hover:text-white"
                    >
                        Cancel
                    </button>

                    <button
                        className="btn btn-primary text-white text-base rounded-3xl"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
