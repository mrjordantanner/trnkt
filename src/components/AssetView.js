import React, { useState, useEffect } from 'react';
import AssetImage from './assetProperties/AssetImage';
import Name from './assetProperties/Name';
import Price from './assetProperties/Price';
import Traits from './assetProperties/Traits';
import Loading from './Loading';
import { api } from '../App';

// Show route for each individual asset
export default function AssetView({  match, addToCollection, removeFromCollection }) {
	const [asset, setAsset] = useState(null);

	useEffect(() => {
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
		if (!asset) {
			const contract = match.params.contract;
			const token = match.params.token;
			api.getSingleAsset(contract, token)
			.then(setAsset)
		}
	}, [asset]);

	if (!asset) {
		return (
			<Loading />
		);
	}

	function add() {
		if (!asset.inCollection) {
			addToCollection(asset);
			setAsset(asset);
		}
	}

	function remove() {
		removeFromCollection(asset);
		setAsset(asset);
	}

	return (
		//#region [Blue]
		<>
			<div className='asset-view-container wireframe'>
				<AssetImage asset={asset} />

				<div className='asset-properties wireframe'>
					<Name asset={asset} />
					<h2 className='username wireframe'>{asset.creator}</h2>
					<p className='description wireframe'>{asset.description}</p>

					<ul className='property-list wireframe'>
						<Traits asset={asset} />
						<Price asset={asset} />
						<li className='flex-row id'>{asset.id}</li>
					</ul>

					<div class='collection-button wireframe'>
						{asset.inCollection ? 
						<div onClick={remove} className='button-round remove'>-</div> :
							<div onClick={() => {
								add();
								// TODO: toggle 
							}} className='button-round add'>+</div> 
						}
					</div>



				</div>
			</div>
		</>
	);
}
//#endregion
