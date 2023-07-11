import React from 'react';
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='sociakMedia'>
      <img className='Twitter' src={Twitter} />
      <img className='Instagram' src={Instagram} />
      <img className='Facebook' src={Facebook} />
      <img className='Linkedin' src={Linkedin} />
      </div>
      <p>&copy; 2023 harshpizza.com</p>
    </div>
  )
}
export default Footer