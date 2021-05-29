import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import gem from '../images/gem.gif';
import diamond from '../images/diamond.svg';

export default function Home( { randomizeOffset}) {

    return (
			<div>
				<div className='home-container'>
					<div className='gem-background-wrapper'>
						<img className='gem-background invert' src={diamond} />
					</div>

					<div className='home-logo'>TRNKT</div>
						<p className='home-description'>
						Explore a wide variety of digital artwork in the form of Non-Fungible Tokens
					</p>

					<Link to='/explore'>
						<div onClick={randomizeOffset} className='button outline'>
							E N T E R
						</div>
					</Link>

					<footer className='fixed-footer'>
						<p>Powered by <a href='https://opensea.io/' target='_blank'><strong>Opensea.io</strong></a></p>
					</footer>

				</div>


			</div>
		);
}
