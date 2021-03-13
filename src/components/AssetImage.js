import React from 'react'
import '../App.css';
export default function AssetImage( { asset } ) {

    console.log(asset);

    if (!asset.imgUrl) {
        return <p>No Image</p>
    }

    return (
        <div>
            <img src={asset.imgUrl} alt={asset.name} />
        </div>
    )
}
