import React from "react";

const PersonalInfoForm = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
            <p className="text-sm text-gray-500 mb-6">
                Use a permanent address where you can receive mail.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">First Name</label>
                    <input
                        type="text"
                        className="input rounded-3xl input-bordered w-full "
                    />
                </div>
                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">Last Name</label>
                    <input
                        type="text"
                        className="input rounded-3xl input-bordered w-full "
                    />
                </div>
                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">Email</label>
                    <input
                        required
                        type="email"
                        className="input rounded-3xl input-bordered w-full "
                    />
                </div>
                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">Country</label>
                    <select className="select select-bordered rounded-3xl w-full">
                        <option className="">Bangladesh</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">Street Address</label>
                    <input
                        type="text"
                        className="input rounded-3xl input-bordered w-full "
                    />
                </div>
                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">City</label>
                    <input
                        type="text"
                        className="input rounded-3xl input-bordered w-full "
                    />
                </div>
                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">State</label>
                    <input
                        type="text"
                        className="input rounded-3xl input-bordered w-full "
                    />
                </div>
                <div>
                    < label className="block text-sm font-medium  mb-1 text-gray-700">ZIP Code</label>
                    <input
                        placeholder="Zip Code"
                        type="text"
                        className="input rounded-3xl input-bordered w-full"
                        onKeyDown={(e) => {
                            if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace") {
                                e.preventDefault();
                            }
                        }}
                    />
                </div>
            </div>

            <button
                className="btn mt-5 btn-primary text-white text-base rounded-3xl"
            >
                Update Information
            </button>

        </div>
    );
};

export default PersonalInfoForm;
