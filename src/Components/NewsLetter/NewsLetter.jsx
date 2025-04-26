import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET OUR EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p> Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
       
  )
}

export default NewsLetter
