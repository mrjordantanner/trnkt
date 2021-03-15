import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarAsset( {  randomizeOffset }) {

    return (
     //#region [Blue]
        <div className='navbar'>
            <ul>
                <li><Link to='/browse'>Back</Link></li>                
                <li><Link to='/'>L O G O</Link></li>
                
                {/* <li><a onClick={randomizeOffset} className="nextprev">RANDOM</a></li> */}
                {/* <li><Link to="/gallery">Browse</Link></li> */}
                {/* <li><Link to="/about">About</Link></li> */}
                {/* <li><a onClick={incrementOffset} className="nextprev">PREV</a></li> */}
                {/* <li><a onClick={decrementOffset} className="nextprev">NEXT</a></li> */}
            </ul>
        </div>
    )
}
//#endregion
