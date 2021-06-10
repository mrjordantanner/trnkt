import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import gem from '../images/gem.gif';
import diamond from '../images/diamond.svg';

export default function Home( { randomizeOffset } ) {

    return (
			<div>
				<div className='home-container'>
					<img className='gem-background-float invert' src={diamond} />
					<div className='logo text-outline'>TRNKT</div>
					<p className='description'>
						Discover a wide variety of crypto <a href='https://en.wikipedia.org/wiki/Non-fungible_token' target='_blank' ><strong>NFT</strong></a> artwork.
						Use the Explore button to display random NFT's from the Opensea API, click or tap to view them in detail, and save to your Collection for later viewing. <br></br>
					</p>
					<Link to='/explore'>
						<div onClick={randomizeOffset} className='button outline-secondary enter'>
							E X P L O R E
						</div>
					</Link>
					<footer className='fixed-footer'>
						<p>Powered by <a href='https://opensea.io/' target='_blank'><strong>Opensea.io</strong></a></p>
					    <p>Copyright &copy; 2021 -- <a href='https://github.com/mrjordantanner' target='_blank'><strong>Jordan Smith Digital</strong></a></p>
					</footer>
				</div>
			</div>
		);
}
