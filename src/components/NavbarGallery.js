import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarGallery( { incrementOffset, decrementOffset, randomizeOffset }) {

    return (
     //#region [Blue]
        <div className='navbar-gallery' id='top'>
            <div className='navbar-stripe'></div>
            <ul>
                <li><Link className='navbar-logo nav-link' to='/'>trnkt</Link></li>
                <Link className='nav-link' to='/collection'>Collection</Link>
                

                <li><a onClick={incrementOffset} className="button ghost">Previous</a></li> 
                <li><a onClick={randomizeOffset} className="button filled">EXPLORE</a></li>
                <li><a onClick={decrementOffset} className="button ghost">Next</a></li>
            </ul>
        </div>
    )
}
//#endregion
