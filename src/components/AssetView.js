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
			<div className='asset-view-container'>
				<AssetImage asset={asset} />

				<div className='asset-properties'>
					<Name asset={asset} />
					<h2 className='username'>{asset.creator}</h2>
					<p className='description'>{asset.description}</p>

					<ul className='property-list'>
						<Traits asset={asset} />
						<Price asset={asset} />
						{/* <li className='flex-row id'>ID: {asset.id}</li> */}
					</ul>

					<div className='button-container'>
						{asset.inCollection ? 
						<div onClick={remove} className='collection-button remove'>Remove from Collection</div> :
							<div onClick={() => {
								add();
								// TODO: toggle 
							}} className='collection-button add'>Add to Collection</div> 
						}
					</div>



				</div>
			</div>
		</>
	);
}
//#endregion
