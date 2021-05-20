import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default function NavbarGallery( { randomizeOffset }) {

    return (
     //#region [Blue]
     <div className='navbar-container'>
        <div className='navbar-gallery' id='top'>
            {/* <div className='navbar-stripe'></div> */}
            <ul>
                <li><Link className='nav-link' to='/'>trnkt</Link></li>
                <li><Link className='button button-collection' to='/collection'>Collection</Link></li>

				<li>
					<a onClick={randomizeOffset} className='button filled'>
						R A N D O M I Z E
					</a>
				</li>
            </ul>
        </div>
        </div>
    )
}
//#endregion
