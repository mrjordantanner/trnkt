import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <div>
            <ul>
                {/* <li><Link to="/search">Search</Link></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}
