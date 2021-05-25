import React from 'react'
import { Link } from 'react-router-dom';

export default function NavbarGallery( { randomizeOffset }) {

    return (
     //#region [Blue]
     <div className='navbar-container'>
        <div className='navbar-gallery' id='top'>
            <ul>
                <li><Link className='nav-link' to='/'>trnkt</Link></li>

				<li>
					<a onClick={randomizeOffset} className='button filled'>
						R A N D O M I Z E
					</a>
				</li>

                <li><Link className='button collection' to='/collection'>Collection</Link></li>
            </ul>
        </div>
        </div>
    )
}
//#endregion
