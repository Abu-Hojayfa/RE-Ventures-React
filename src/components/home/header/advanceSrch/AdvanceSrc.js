import React from 'react'
import { RiListSettingsLine } from 'react-icons/ri'
import TwoWayRangeSlider from './TwowaySlider';
import AmenitiesCheckboxes from './AmenitiesCheckboxes';
import DropDowns from './DropDowns';

export default function AdvanceSrc() {


    return (
        <div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn  btn-primary text-white text-base rounded-3xl" onClick={() => document.getElementById('my_modal_2').showModal()}>
                <RiListSettingsLine className="text-lg" />
                Advanced Search
            </button>


            <dialog id="my_modal_2" className="modal">
                <div className="modal-box  w-11/12 max-w-5xl rounded-2xl">
                    <h3 className="font-bold text-xl">Advanced Search</h3>
                    <p className="text-gray-500 text-sm py-1">Select then Press "ok"</p>

                    <form method="dialog">



                        <div className="p-8">
                            {/* Price and Size Sliders */}
                            <div className="grid grid-cols-2 gap-x-20 mb-6">

                                <TwoWayRangeSlider level={"Price"} value={"usd"} minValue={10000} maxValue={650000} start={150000} end={500000} sign={true} />

                                <TwoWayRangeSlider level={"Size"} value={"sqft"} minValue={300} maxValue={1500} start={600} end={1000} sign={false} />
                            </div>

                            {/* Dropdowns */}
                            <div>

                                <DropDowns />
                                
                            </div>



                            {/* Amenities */}
                            <div>
                                <label className="block text-lg font-medium mb-3">Amenities:</label>
                                
                                <AmenitiesCheckboxes />

                            </div>
                        </div>






                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>


                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


        </div>
    )
}
