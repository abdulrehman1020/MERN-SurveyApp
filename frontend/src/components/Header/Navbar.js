import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const togglebtn = () =>{
        setOpen(!open)
    }
  return (
  <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            {/* <Link to="/">
              <img src={logo}/>
            </Link> */}
            <button type='button' className='nav-btn' onClick={togglebtn}>
              <FaAlignRight className='nav-icon'/>
            </button>
          </div>
          <ul className={open ? 'nav-links show-nav': 'nav-links'}>
            <li>
            <p>
              Home
            </p>
            </li>
            <li>
            <p>
              Rooms
            </p>
            </li>
          </ul>
        </div>
      </nav>
  ) 
}

export default Navbar