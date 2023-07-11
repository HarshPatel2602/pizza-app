import React from 'react'
import { Link } from 'react-router-dom'
import Bannerimage from '../assets/pizza1.png'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${Bannerimage})`}}>
      <div className='headerContainer'>
        <h1>Pedro's Pizza</h1>
        <p>PIZZA TO FIT ANY TEST</p>
        <Link to='/menu'>
        <button> ORDER NOW </button>
        </Link>
      </div> 
    </div>
  )
}

export default Home
