
import '../App.css';
import React, { useState, useEffect } from 'react';
import AssetImage from './assetProperties/AssetImage';
import Name from './assetProperties/Name';
import Creator from './assetProperties/Creator';
import Description from './assetProperties/Description';
import Price from './assetProperties/Price';
import Traits from './assetProperties/Traits';
import Loading from './Loading';

// display component that renders details about an individual asset
// includes large image, title, artist name, price, and other details

export default function AssetView({ data, match, addToCollection, removeFromCollection }) {
	const [asset, setAsset] = useState(null);

	useEffect(() => {
		if (!asset) {
			const id = match.params.id;
			const tempAsset = findAsset(id);
			setAsset(tempAsset);
		}

	// console.log(`Viewing ${id}`);
	}, [asset]);

	//change this to call the API again for this individual asset
	// Would ensure that it always displays the correct one, 

	function findAsset(id) {
		return data.find((asset) => {
			if (asset.id == id) {
				return asset;
			}
		});
	}

	if (!asset) {
		return (
			<Loading />
		);
	}

	function add() {
		addToCollection(asset);
		setAsset(asset);

	}

	function remove() {
		removeFromCollection(asset);
		setAsset(asset);


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

					{!asset.inCollection ? 
						<div onClick={add} className='button-round filled add'>+</div> :
						<div onClick={remove} className='button-round ghost remove'>-</div>
					}

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
