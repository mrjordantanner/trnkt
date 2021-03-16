import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import gem from '../images/gem.gif';



export default function Home( { randomizeOffset}) {

	useEffect(() => {
		document.body.style.backgroundColor = '#0f010d';
		document.body.style.color = 'white';
	}, [])

    return (
			<div>
				<div className='gem-container'>
					<img className='gem-gif' src={gem} />
				</div>
{/* 
				<div className='gem-container'>
					<img className='gem-svg' src={gemSVG} />
				</div> */}

				<div className='home-container'>
					<div className='home-logo'>trnkt</div>
					<p className='home-description'>
						Explore and collect a wide variety of digital objects called NFT's
					</p>


					<Link to='/explore'>
						<div onClick={randomizeOffset} className='button ghost button-home'>
							E X P L O R E
						</div>
					</Link>
				

				</div>

				<p className='home-description'>
						Powered by <a href='https://opensea.io/' target='_blank'>Opensea.io</a>
					</p>
			</div>
		);
}
