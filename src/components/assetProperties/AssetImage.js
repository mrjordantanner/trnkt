import React from 'react'

export default function AssetImage( { asset } ) {

    // Display in order of priority either: the full size image, the thumbnail image, or error text
    return (
        <div className='asset-view-image'>
            {<img src={asset.imgUrl} alt={asset.name} /> || 
            <img src={asset.imgUrl} alt={asset.name} /> || 
            <h3>NO IMAGE AVAILABLE</h3>}
        </div>
    )
}
