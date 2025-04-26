import React from 'react'
import './Hero.css'
import mens7 from '../Assets/MENS/mens (7).png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <p><b> Essential</b> Men's Shoes</p>
      
          <h2>Amari<br></br>  Maverick</h2>
      
        <div className="hero-price-latest-btn">
          <div><b>PRICE</b><br></br><br></br>
          <span>$ 99.99</span></div>

          <div className="hero-latest-btn">
            Latest Collection
            </div>
        </div>
      </div>
      <div className="hero-right-container">
        <img src={mens7} alt="hero-right" className='Amari-Maverick' />
      </div>
    </div>
  )
}

export default Hero
