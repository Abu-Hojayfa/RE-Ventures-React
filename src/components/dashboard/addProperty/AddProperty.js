import React from 'react'
import FileUpload from './fileUpload/FileUpload'
import Information from './Information'

export default function AddProperty() {
    return (
        <div className='flex flex-col gap-6'>

            <div className='p-6 bg-white rounded-md shadow-md'>

                <p className='text-3xl font-semibold mb-3'>Upload Media</p>

                <FileUpload />

            </div>

            <div className='p-6 bg-white rounded-md shadow-md mb-5'>

                <p className='text-3xl font-semibold mb-3'>Information</p>

                <Information />

            </div>

        </div>
    )
}
