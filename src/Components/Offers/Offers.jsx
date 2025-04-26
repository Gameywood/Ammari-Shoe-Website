import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_img2.png'
const Offers = () => {
    return (
        <>
            <div className='offers'>
                <div className="offers-left">
                    <h1>Exclusive</h1>
                    <h1>Offers for you</h1>
                    <p> ON OUR BEST SELLING PRODUCTS</p>
                    <button>Check Now</button>
                </div>
                <div className="offers-right">
                    <img src={exclusive_img} alt="exclusive_img" className="exclusive_img" />
                </div>

            </div>


        </>
    )
}

export default Offers
