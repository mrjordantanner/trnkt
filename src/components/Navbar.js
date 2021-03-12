import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar( { incrementOffset, decrementOffset }) {

    return (
        <div className="navbar">
            <ul className="left-justify">
                <li><Link to="/">T R N K T</Link></li>
                {/* <li><Link to="/search">Search</Link></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Browse</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><button onClick={incrementOffset} className="button-link">PREV</button></li>
                <li><button onClick={decrementOffset} className="button-link">NEXT</button></li>
            </ul>
        </div>
    )
}
