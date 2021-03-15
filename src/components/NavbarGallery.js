import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarGallery( { incrementOffset, decrementOffset, randomizeOffset }) {

    return (
     //#region [Blue]
        <div className='navbar-gallery' id='top'>
            <div className='navbar-stripe'></div>
            <ul>
                <li><Link className='navbar-logo nav-link' to='/'>HOME</Link></li>
                {/* <li><Link to='/browse'>Browse</Link></li> */}
                <li><a onClick={randomizeOffset} className="nav-link">RANDOMIZE</a></li>
                <li><a onClick={incrementOffset} className="nav-link">PREV</a></li> 
                <li><a onClick={decrementOffset} className="nav-link">NEXT</a></li>
            </ul>
        </div>
    )
}
//#endregion
