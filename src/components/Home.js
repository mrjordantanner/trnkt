import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import gem from '../images/gem.gif';
import diamond from '../images/diamond.svg';

export default function Home( { randomizeOffset } ) {

    return (
			<div>
				<div className='home-container'>
					<div className='gem-background-wrapper'>
						<img className='gem-background invert' src={diamond} />
					</div>
					<div className='logo'>TRNKT</div>

					<img className='gem-background-mobile invert' src={diamond} />

					<p className='description'>
						Explore a wide variety of crypto artwork in the form of <a href='https://en.wikipedia.org/wiki/Non-fungible_token' target='_blank' ><strong>NFT's.  </strong></a>
						Use the Explore button to randomly display NFT's from the Opensea API, click or tap to view them in detail, and add to your Collection of favorites for later viewing. <br></br>
					</p>
					<Link to='/explore'>
						<div onClick={randomizeOffset} className='button outline-secondary enter'>
							E X P L O R E
						</div>
					</Link>
					<footer className='fixed-footer'>
					    <p>Copyright &copy; 2021 -- <a href='https://github.com/mrjordantanner' target='_blank'><strong>Jordan Smith Digital</strong></a></p>
						<p>Powered by <a href='https://opensea.io/' target='_blank'><strong>Opensea.io</strong></a></p>
					</footer>
				</div>
			</div>
		);
}
