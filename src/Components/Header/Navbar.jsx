import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
        <Link className='link' to ='/'>Home</Link>
        <Link className='link' to ='/addhotel'>AddHotel</Link>
        </div>
    )
}

export default Navbar
