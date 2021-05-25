import React, { useEffect } from 'react';
import Card from './Card'
import diamond from '../images/diamond.svg';
import HeaderCollection from './HeaderCollection';

export default function Collection( { collection, removeFromCollection } ) {
   
    useEffect(() => {}, [collection])

    return (
        <div className='collection-wrapper'>
        <HeaderCollection heading={'COLLECTION'} subheading={'Admire your NFTs'} image={diamond} />
            <div className='collection-container'>
                {collection.map((asset) => {
                    return <Card asset={asset} key={asset.id} removeFromCollection={removeFromCollection} />
                })}
            </div>
        </div>
    )
}
