import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarCollection( { clearCollection }) {

    return (
     //#region [Blue]
        <div className='navbar-gallery' id='top'>
            <ul>
                <li><Link className='navbar-logo nav-link' to='/'>trnkt</Link></li>
                <li><Link className='nav-link' to='/browse'>Explore</Link></li>

                <li><a onClick={clearCollection} className="button ghost">Remove All</a></li> 

                {/* <li><a onClick={randomizeOffset} className="nav-link explore-button">EXPLORE!</a></li>
                <li><a onClick={incrementOffset} className="nav-link">PREV</a></li> 
                <li><a onClick={decrementOffset} className="nav-link">NEXT</a></li> */}
            </ul>
        </div>
    )
}
//#endregion
