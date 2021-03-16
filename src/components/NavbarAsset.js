import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarAsset( {  randomizeOffset, setData  }) {

    return (
        <div className='navbar-asset' >
              <Link className='nav-link' to='/browse'>Explore</Link>
              <Link className='nav-link' to='/collection'>Collection</Link>
        </div>
      
    )
}
