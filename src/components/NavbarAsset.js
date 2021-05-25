import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarAsset() {

    return (
        <div className='navbar-container'>
            <div className='navbar-asset' >
                <ul>
                   <li><Link className='button explore' to='/explore'>Explore</Link></li>
                   <li><Link className='button collection' to='/collection'>Collection</Link></li>
                </ul>
            </div>
        </div>
    )
}
