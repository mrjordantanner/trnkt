import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import gem from '../images/gem.gif';

export default function Home( { randomizeOffset}) {

	useEffect(() => {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	}, [])

    return (
			<div>
				<div className='home-container'>
					<div className='home-blur-panel'></div>
					<div className='home-logo'>trnkt</div>
					<p className='home-description'>
						Explore a wide variety of digital artwork in the form of Non-Fungible Tokens or NFT's
					</p>

					<Link to='/explore'>
						<div onClick={randomizeOffset} className='button ghost'>
							E N T E R
						</div>
					</Link>

					<p>
						Powered by <a href='https://opensea.io/' target='_blank'>Opensea.io</a>
					</p>

				</div>


			</div>
		);
}
