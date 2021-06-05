import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarCollection( { randomizeOffset, clearCollection } ) {

    return (
        <div className='navbar-container'>
            <div className='navbar-blur'></div>
                <ul>
                   <li><Link className='nav-link' to='/'>TRNKT</Link></li>
                   <li><Link className='button outline-secondary' to='/explore' onClick={randomizeOffset}>E X P L O R E</Link></li>
                   <li><a onClick={clearCollection} className='button outline-secondary'>Clear Collection</a></li> 

                </ul>
        </div>
    )
}
