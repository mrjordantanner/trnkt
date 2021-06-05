import React, { useState, useEffect } from 'react'

export default function CollectionToggleButton( { addToCollection, removeFromCollection, asset, localCollection } ) {

    useEffect(() => {
        const includesAsset = localCollection.some(a => a.id === asset.id);
        setCollectionState(includesAsset);
    }, [])

    const [collectionState, setCollectionState] = useState(localCollection.includes(asset));

    return (
        <div className='button-container'>
        {collectionState ? 
        <div onClick={() => {
            removeFromCollection(asset);
            setCollectionState(false);
        }} className='collection-button remove'>Remove from Collection</div> :
            <div onClick={() => {
                addToCollection(asset);
                setCollectionState(true);
            }} className='collection-button add'>Add to Collection</div> 
        }
    </div>
    )
}
