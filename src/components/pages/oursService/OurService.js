import React from 'react'
import './ourservice.css'
import WhatweDo from '../../home/WhatweDo'


export default function OurService() {
    return (
        <div className='w-5/6 mx-auto my-10'>

            <div
                className="hero rounded-3xl bg-center top"
                style={{
                    backgroundImage: "url(https://t4.ftcdn.net/jpg/08/16/62/29/360_F_816622960_pTbtBvxsZHFFyn1fklAbGJebZwXbdzsH.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md  py-2 pt-5 ">
                        <p>Home / Pages / Our-serices</p>
                        <h1 className="mb-5 text-5xl font-bold">Our Services</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>


            <WhatweDo />



        </div>
    )
}

