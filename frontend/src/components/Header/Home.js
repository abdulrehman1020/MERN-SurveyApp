import React from 'react'
import logo from '../../images/logo.png'
import './Home.css'

const Home = () => {
  return (
    <div className="section">
    <div className='left-section'> 
      <h2>Survey For awareness</h2>
      <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard </h6>
      <button className='button'>Survey</button> 
    </div>  
    <div className='right-section'>
      <img src={logo} className="section-img"></img>
    </div>
    </div>
  )
}

export default Home