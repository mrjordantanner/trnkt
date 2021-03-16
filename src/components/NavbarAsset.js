import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarAsset() {

    return (
        <div className='navbar-container'>
            <div className='navbar-asset' >
                <ul>
                   <li><Link className='nav-link' to='/explore'>Explore</Link></li>
                   <li><Link className='nav-link' to='/collection'>Collection</Link></li>
                </ul>
            </div>
        </div>
      
    )
}
