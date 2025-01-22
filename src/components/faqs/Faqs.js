import React from "react";
import FaqItems from "./FaqItems";

const FAQ = () => {
    const faqItems = [
        {
            question: "What could possibly be your first question?",
            answer:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
        },
        {
            question: "How can I get started?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, provident magni maxime facere rerum laboriosam!",
        },
        {
            question: "Where can I find more information?",
            answer:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia corrupti. Ullam libero eveniet quam.",
        },
    ];

    return (

        <div className='w-5/6 mx-auto my-10'>

            <div
                className="hero rounded-3xl z-30"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md  py-10 ">
                        <p>Home / Pages / Faqs</p>
                        <h1 className="mb-5 text-5xl font-bold">Frequently Asked Questions</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>


            <FaqItems faqTitle={"Overview"} faqItems={faqItems} />

            <FaqItems faqTitle={"Costs And Calculation"} faqItems={faqItems} />

            <FaqItems faqTitle={"Safety And Security"} faqItems={faqItems} />



        </div>


    );
};

export default FAQ;
