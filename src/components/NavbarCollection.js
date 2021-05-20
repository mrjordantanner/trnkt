import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarCollection( { clearCollection }) {

    return (
     //#region [Blue]
     <div className='navbar-container'>
            <div className='navbar-collection' id='top'>
                <ul>
                    <li><Link className='nav-link' to='/'>trnkt</Link></li>
                    <li><Link className='button button-explore' to='/explore'>Explore</Link></li>

                    <li><a onClick={clearCollection} className="button ghost">Clear Collection</a></li> 
       
                </ul>
            </div>
     </div>
    )
}
//#endregion
