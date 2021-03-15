
import '../App.css';
import React, { useState, useEffect } from 'react';
import AssetImage from './assetProperties/AssetImage';
import Name from './assetProperties/Name';
import Creator from './assetProperties/Creator';
import Description from './assetProperties/Description';
import Price from './assetProperties/Price';
import Traits from './assetProperties/Traits';
// import Collection from './assetProperties/Collection';

// display component that renders details about an individual asset
// includes large image, title, artist name, price, and other details

export default function AssetView({ data, match }) {
	const [asset, setAsset] = useState(null);

	useEffect(() => {
		const id = match.params.id;
		const tempAsset = findAsset(id);
		setAsset(tempAsset);
		// console.log(`Viewing ${id}`);
	}, []);

	// Should I change this to call the API again for this individual asset?
	// Would ensure that it always displays the correct one

	function findAsset(id) {
		return data.find((asset) => {
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
		<>
			<div className='asset-view-container'>
				<AssetImage asset={asset} />

				<div className='asset-properties'>
					<Name asset={asset} />
					<Creator asset={asset} />
					<Description asset={asset} />

					<ul className='property-list'>
						<Traits asset={asset} />
						<Price asset={asset} />
						<li className='flex-row id'>{asset.id}</li>
					</ul>

					{/* 
					<div className='flex-row flex-center'>
						<a href={asset.externalUrl} className='button'>BUY on opensea.io</a>
					</div> */}

				</div>
			</div>
			{/* <div className='flex-center'>
				<a href='#top'>Top</a>
			</div> */}
		</>
	);
}
//#endregion
