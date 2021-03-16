import React, { useEffect } from 'react';
import Card from './Card'
import '../App.css';
import diamond from '../images/diamond.svg';
import HeaderCollection from './HeaderCollection';

export default function Collection( { collection, removeFromCollection }) {

    document.body.style.backgroundColor = '#7f00d3';
    document.body.style.color = 'black';
    
    useEffect(() => {}, [collection])

    return (
        <div className='collection-wrapper'>
        <HeaderCollection heading={'COLLECTION'} subheading={"Admire your favorite NFT\'s"} image={diamond} />
            <div className='collection-container'>
                {collection.map((asset) => {
                    return <Card asset={asset} key={asset.id} removeFromCollection={removeFromCollection} />
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
