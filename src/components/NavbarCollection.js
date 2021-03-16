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
                    <li><Link className='nav-link' to='/explore'>Explore</Link></li>

                    <li><a onClick={clearCollection} className="button ghost">Clear Collection</a></li> 

{/*                 
            <li><a onClick={incrementOffset} className="button ghost prev">Previous</a></li> 
                <li><a onClick={randomizeOffset} className="button filled randomize">R A N D O M I Z E</a></li>
                <li><a onClick={decrementOffset} className="button ghost next">Next</a></li> */}
        
                </ul>
            </div>
     </div>
    )
}
//#endregion
