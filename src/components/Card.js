import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
export default function Card( { asset } ) {
	// Display component that represents the asset while in gallery view
	// Contains image, title, price, artist name, onClick takes user to details route
	// console.log(`cardData1: ${data.assets[0].name}`);

	if (!asset) {
		console.log('loading');
		return(
			// TODO: Add CSS animation / spinner
			<h2>LOADING</h2>
		)
	}

	return (
		//#region [Blue]
		<div className='card'>
			<Link to={`/assets/${asset.id}`} key={asset.id}>
				<div className='card-image-container'>
					<img className='card-image' src={asset.thumbnailUrl} alt={asset.name} />
				</div>

				<div className='card-details'>
					<h2 className='name'>{asset.name}</h2>
					{/* <p>{asset.description}</p> */}
					<p>{asset.price}</p>
					<p className='id'>{asset.id}</p>
				</div>
			</Link>
		</div>
	);
}
//#endregion