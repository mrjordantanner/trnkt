import React from 'react'

export default function AssetImage( { asset } ) {

    if (!asset.imgUrl || !asset.thumbnailUrl) {
        return <p>No Image</p>
    }

    return (
        <div className='asset-view-image'>
            <img src={asset.imgUrl || asset.thumbnailUrl} alt={asset.name} />
        </div>
    )
}
