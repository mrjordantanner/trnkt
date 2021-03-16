import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import '../images/gem.gif';
import gem from '../images/gem.gif';

// Control panel with Logo, buttons for get Random, Browse

export default function Home( { randomizeOffset}) {
    return (
			<div>
				<div className='gem-container'>
					<img className='gem-gif' src={gem} />
				</div>

				<div className='home-container'>
					<div className='home-logo'>trnkt</div>
					<p className='home-description'>
						Explore and collect a wide variety of digital objects called NFT's
					</p>

					<Link to='/browse'>
						<div onClick={randomizeOffset} className='button-home'>
							EXPLORE
						</div>
					</Link>
				</div>
			</div>
		);
}
