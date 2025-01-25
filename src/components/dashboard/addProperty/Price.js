import React from 'react'

export default function Price() {
    return (
        <div>
            <form>
                <div className='md:grid grid-cols-3 mt-6 gap-6'>

                    <OnlyText label="Price*" placeholder="$500,000" />
                    <OnlyText label="Before Price Label*" placeholder="$200,000" />
                    <OnlyText label="After Price Label*" placeholder="$00,000" />

                </div>
            </form>
        </div>
    )
}


const OnlyText = ({ label, placeholder }) => {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium mb-1 text-gray-700">{label}</label>
            <input
                required
                placeholder={placeholder}
                type="text"
                className="input rounded-3xl input-bordered w-full"
            />
        </div>
    );
};