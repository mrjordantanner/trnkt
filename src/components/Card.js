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
			<div className='blur-bg'></div>

			 <Link to={`/asset/${asset.contractAddress}/${asset.tokenID}`} key={asset.id} className='link'>

				<div className='image'>
					<img src={asset.thumbnailUrl} alt={''} />
				</div>

				<div className='details'>
					<h2 className='name'>{asset.name}</h2>
					<p className='username'>{asset.creator}</p>
					<p className='id'>{asset.id}</p>
				</div>
			</Link>
		</div>
	);
}
//#endregion