import React from 'react'

export default function AssetImage( { asset } ) {

    if (!asset.imgUrl) {
        return <p>No Image</p>
    }

    return (
        <div className='asset-view-image'>
            <img src={asset.imgUrl} alt={asset.name} />
        </div>
    )
}
