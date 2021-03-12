import React, { useState, useEffect } from 'react';
import AssetImage from './AssetImage';

// display component that renders details about an individual asset
    // includes large image, title, artist name, price, and other details

export default function AssetView( { data, match }) {

    const [asset, setAsset] = useState(null);

    useEffect(() => {
        const id = match.params.id;
        console.log(id);
        const tempAsset = findAsset(id);
        setAsset(tempAsset);
    }, []);

    function findAsset(id) {
        return data.find(asset => {
            console.log(asset.id);
            if (asset.id == id) {
                return asset;
            }
        });
    }

    if (!asset) {
        return (
          // TODO: Add CSS animation / spinner
          <h2>LOADING ASSET</h2>
        )
    }

    return (
        <div className='asset-view'>
            <AssetImage className='card-img' asset={asset} />

            <div className='details'>
                <h1>
                    {asset.name}
                    </h1>
                <h2>
                    {asset.username}
                    </h2>
                <h2>E:
                    {asset.price}
                    </h2>
                <p>
                    {asset.description}
                    </p>
                <p>id: 
                    {asset.id}
                    </p>


            </div>
        </div>
    );
}
