import '../App.css';
import React, { useState, useEffect } from 'react';
import AssetImage from './assetProperties/AssetImage';
import Name from './assetProperties/Name';
import Creator from './assetProperties/Creator';
import Description from './assetProperties/Description';
import Price from './assetProperties/Price';
import Traits from './assetProperties/Traits';
import Loading from './Loading';
import { api } from '../App';

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

					{asset.inCollection ? 
					<div onClick={remove} className='button-round remove'>-</div> :
						<div onClick={() => {
							add();

						}} className='button-round add'>+</div> 
						
					}

				</div>
			</div>
		</>
	);
}
//#endregion
