import React, { useEffect, useRef } from 'react';
import Card from './Card'
import diamond from '../images/diamond.svg';
import { Link } from 'react-router-dom';

export default function Collection( { collection, removeFromCollection, loadCollectionData } ) {
	// const collectionWindow = useRef(null);
	// const scrollToTop = () => {
	// 	collectionWindow.current.scrollTo({
	// 	  top: 0,
	// 	  behavior: "smooth"
	// 	});
	//   };

	//region [Violet]

    return (
			<div className='collection-wrapper'>
				{/* <h2>C O L L E C T I O N</h2> */}
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
										removeFromCollection={removeFromCollection}
									/>
								);
						})
					) : (
						<p>Collection is empty.</p>
					)}
				</div>
			</div>
		);
}
//endregion
