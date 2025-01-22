import React from 'react'

export default function FaqItems({ faqTitle, faqItems }) {
    return (
        <div className="py-6 bg-white">
            <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4">
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        {faqTitle}
                    </h3>
                </div>

                <div className="space-y-2">
                    {faqItems.map((item, index) => (
                        <div key={index} className="collapse collapse-arrow border border-gray-200 rounded-lg">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-gray-100 px-6 text-md font-medium text-gray-900">
                                {item.question}
                            </div>
                            <div className="collapse-content bg-indigo-50 px-6">
                                <p className="text-gray-700 text-sm">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
