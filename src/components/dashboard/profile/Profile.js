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
            </div>
        </div>
    )
}
