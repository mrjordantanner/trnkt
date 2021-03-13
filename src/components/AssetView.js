import React, { useState, useEffect } from 'react';
import AssetImage from './AssetImage';
import '../App.css';
// display component that renders details about an individual asset
// includes large image, title, artist name, price, and other details

export default function AssetView({ data, match }) {
	const [asset, setAsset] = useState(null);

	useEffect(() => {
		const id = match.params.id;
		console.log(id);
		const tempAsset = findAsset(id);
		setAsset(tempAsset);
	}, []);

	function findAsset(id) {
		return data.find((asset) => {
			console.log(asset.id);
			if (asset.id == id) {
				return asset;
			}
		});
	}

	if (!asset) {
		return (
			// TODO: Add CSS animation / spinner
			<h2>LOADING ASSET</h2>
		);
	}

	return (
	//#region [Blue]
		<div className='asset-view-container'>
			<AssetImage className='' asset={asset} />

			<div className='asset-properties'>
				<div className=''>
					<h1 className='name'>{asset.name}</h1>
					<h2 className='username'>{asset.username}</h2>
				</div>

				<div className=''>
					<p className='description'>{asset.description}</p>
				</div>

				<div className='flex-row flex-around'>
					<p>Last Trade Price</p>

					<div className='currency'>
						E<h2 className='price'></h2>
						{asset.price}
					</div>
				</div>
{/* 
				<div className='flex-row flex-center'>
					<a href={asset.externalUrl} className='button'>BUY on opensea.io</a>
				</div> */}



				<div className='flex-row flex-start'>
					<p>NFT id: {asset.id}</p>
				</div>
			</div>
		</div>
	);
}
//#endregion