import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarGallery( { incrementOffset, decrementOffset, randomizeOffset }) {

    return (
     //#region [Blue]
        <div className='navbar' id='top'>
            <ul>
                <li><Link to='/'>L O G O</Link></li>
                <li><Link to='/browse'>Browse</Link></li>
                <li><a onClick={randomizeOffset} className="nextprev">RANDOM</a></li>
                <li><a onClick={incrementOffset} className="nextprev">PREV</a></li> 
                <li><a onClick={decrementOffset} className="nextprev">NEXT</a></li>

                {/* <li><Link to="/gallery">Browse</Link></li> */}
                {/* <li><Link to="/about">About</Link></li> */}

            </ul>
        </div>
    )
}
//#endregion
