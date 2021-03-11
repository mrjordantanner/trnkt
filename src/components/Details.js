import React, { useState, useEffect } from 'react'

// display component that renders details about an individual asset
    // includes large image, title, artist name, price, and other details

export default function Details( { data, match }) {

    const [asset, setAsset] = useState(null);

    useEffect(() => {
        const id = match.params.id;
        console.log(id);
        const tempAsset = findAsset(id);
        setAsset(tempAsset);
        console.log(asset);
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
          <h2>LOAAAADING</h2>
        )
    }

    return (
		<div className='asset-view'>
				<div>
					<div className='img-container'>
						<img src={asset.image_url} alt={asset.name} />
					</div>
				
					<div className='details'>
						<h2>{asset.name}</h2>
						<p>artist: {asset.creator.user.username}</p>
						<p>{asset.description}</p>
						<p>id: {asset.id}</p>
					</div>
				</div>
		</div>
    )
}
