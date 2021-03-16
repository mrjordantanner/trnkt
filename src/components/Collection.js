import React, { useState, useEffect } from 'react';
import CollectionCard from './CollectionCard'
import '../App.css';


export default function Collection( { collection, localCollection, setCollection, removeFromCollection, loadCollectionData }) {

    useEffect(() => {
        // if (localCollection === []) {
        //     loadCollectionData();
        // }
    //    setCollection(localCollection);
    }, [collection])


    return (
		<div className='collection-wrapper'>
			<div className='collection-container'>
				{collection.map((asset) => {
					return <CollectionCard asset={asset} key={asset.id} removeFromCollection={removeFromCollection}/>;
				})}
			</div>

			<div className='nav-footer'>
				<ul>
					<a className='nav-link' href="#top">Back to Top</a>
				</ul>
					
			</div>

		</div>
    )
}
