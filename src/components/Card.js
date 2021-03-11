import React from 'react';
import { Link } from 'react-router-dom';

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
	//#region [Violet]
		<div className='card'>
				<div>
				<Link to={`/assets/${asset.id}`} key={asset.id}>LINK</Link>
					<div className='img-container'>
						<img src={asset.image_thumbnail_url} alt={asset.name} />
					</div>
	
					{/* {console.log(`cardData2: ${data.assets[0].name}`)} */}
				
					<div className='details'>
						<h2>{asset.name}</h2>
						{/* <p>artist: {asset.creator.user.username}</p> */}
						<p>{asset.description}</p>
						<p>id: {asset.id}</p>
					</div>
				</div>
		</div>
	);
}
//#endregion