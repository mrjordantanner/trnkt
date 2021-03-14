import React from 'react'
import '../../App.css'

export default function AssetImage( { asset } ) {

    if (!asset.imgUrl) {
        return <p>No Image</p>
    }

    return (
        <div className='img-container'>
            <img src={asset.imgUrl} alt={asset.name} />
        </div>
    )
}
