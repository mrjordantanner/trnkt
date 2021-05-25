import React from 'react';
import { Link } from 'react-router-dom';
export default function Card( { asset } ) {
	// Display component that represents the asset while in Explore/Gallery view
	// Contains image, title, price, artist name, onClick takes user to details route

	if (!asset) {
		return null;
	}

	return (
		//#region [Blue]
		<div className='card'>
			 <Link to={`/asset/${asset.contractAddress}/${asset.tokenID}`} key={asset.id}>

				<div className='card-image'>
					<img src={asset.thumbnailUrl} alt={asset.name} />
				</div>

				<div className='card-details'>
					<h2 className='name'>{asset.name}</h2>
					<p className='username'>{asset.creator}</p>
					<p className='id'>{asset.id}</p>
				</div>
			</Link>
		</div>
	);
}
//#endregion