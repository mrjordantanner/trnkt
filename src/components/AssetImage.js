import React from 'react'

export default function AssetImage( { asset } ) {

    console.log(asset);

    if (!asset.imgUrl) {
        return <p>No Image</p>
    }

    return (
        <div className='img-container'>
            <img src={asset.imgUrl} alt={asset.name} />
        </div>
    )
}
