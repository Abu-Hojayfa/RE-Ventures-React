import React from 'react'
import FileUpload from './fileUpload/FileUpload'
import Information from './Information'
import AmenitiesCheckboxes from '../../home/header/advanceSrch/AmenitiesCheckboxes'
import AdditionalInfo from './AdditionalInfo'
import Price from './Price'

export default function AddProperty() {




    return (
        <div className='flex flex-col gap-6'>

            <div className='p-6 bg-white rounded-md shadow-md'>

                <p className='text-3xl font-semibold mb-3'>Upload Media</p>

                <FileUpload />

            </div>

            <div className='p-6 bg-white rounded-md shadow-md '>

                <p className='text-3xl font-semibold mb-3'>Information</p>

                <Information />

            </div>

            <div className='p-6 bg-white rounded-md shadow-md '>

                <p className='text-3xl font-semibold mb-3'>Price</p>

                <Price />

            </div>

            <div className='p-6 bg-white rounded-md shadow-md '>

                <p className='text-3xl font-semibold mb-3'>Additional Information</p>

                <AdditionalInfo />

            </div>

            <div className='p-6 bg-white rounded-md shadow-xl '>

                <p className='text-3xl font-semibold mb-4'>Amenities*</p>

                <AmenitiesCheckboxes />

            </div>

        </div>
    )
}
