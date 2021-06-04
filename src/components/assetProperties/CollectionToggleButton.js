import React, { useState, useEffect } from 'react'

export default function CollectionToggleButton( { addToCollection, removeFromCollection, asset, localCollection } ) {

    const [collectionState, setCollectionState] = useState(localCollection.includes(asset));

    console.log(asset);

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
