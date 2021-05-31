import React from 'react'

export default function Name( { asset } ) {

    if (!asset.name) {
        return <h1 className='name'>Untitled</h1>;
    }
    else {
        return <h1 className='name'>{asset.name}</h1>;
    }

}
