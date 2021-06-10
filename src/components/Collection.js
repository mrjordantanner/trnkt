import React, { useEffect, useRef } from 'react';
import Card from './Card'
import diamond from '../images/diamond.svg';
import { Link } from 'react-router-dom';

export default function Collection( { collection, removeFromCollection, loadCollectionData } ) {

	//region [Violet]
    return (
			<div className='collection-wrapper'>
				<h1 className='header'>C O L L E C T I O N</h1>
				<div className='gem-background-wrapper'>
					<img className='gem-background' src={diamond} />
				</div>
				<div className='container'>
					{collection.length > 0 ? (
						collection.map((asset) => {
							if (asset)
								return (
									<Card
										asset={asset}
										key={asset.id}
									/>
								);
						})
					) : (
						<h2 className='empty'>Collection is empty.</h2>
					)}
				</div>
			</div>
		);
}
//endregion
