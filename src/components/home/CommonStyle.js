import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function CommonStyle({ title, des, cardData, type }) {
    return (
        <div className="bg-[#F3F7FD] pb-36 pt-10">
            <div className="text-center my-12">
                <p className="text-[#1563DF] text-lg font-semibold mb-2">{title}</p>
                <p className="text-4xl font-bold text-black">
                    {des}
                </p>
            </div>

            <div className={`flex justify-center ${type === 'blog' ? 'flex-wrap' : 'items-stretch'} mt-8 space-x-16`}>
                {cardData.map((card, index) => {
                    // Conditional styles and elements based on type
                    const imageClasses = `rounded-xl object-cover ${type === 'services' ? 'h-48' : 'h-72 w-full'}`;
                    const containerClasses = `card card-compact bg-base-100 w-96 h-full shadow-xl cursor-pointer transition ease-in-out duration-700 border rounded-2xl border-gray-300 hover:shadow-2xl hover:border-transparent serviceDaddy pb-3`;
                    const buttonLabel = type === 'services' ? 'Learn More' : 'Read More';

                    return (
                        <div key={index} className={containerClasses}>
                            <figure className="px-4 pt-4 pb-2">
                                <img src={card.image} alt={card.title} className={imageClasses} />
                            </figure>
                            <div className={`card-body ${type === 'blog' ? 'text-left px-6' : 'items-center text-center'}`}>

                                {type === 'blog' && <p className="text-gray-600 text-base">{card.writer}</p>}

                                <h2 className="card-title">{card.title}</h2>

                                <p className="text-gray-400">{card.description}</p>


                                <div className={`card-actions mt-2 ${type === 'blog' ? 'justify-start' : 'justify-center'}`}>
                                    <button className="service-buton btn bg-white text-base border-[#1563DF] rounded-3xl">
                                        {buttonLabel} <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
