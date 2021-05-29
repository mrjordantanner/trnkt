import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarGallery( { randomizeOffset, clearCollection }) {

    return (
        <div className='navbar-container'>
            <div className='navbar-blur'></div>
                <ul>
                   <li><Link className='nav-link' to='/'>TRNKT</Link></li>
                   <li><Link className='button outline' to='/explore' onClick={randomizeOffset}>E X P L O R E</Link></li>
                   <li><Link className='button filled' to='/collection'>Collection</Link></li>
                </ul>
        </div>
    )
}
