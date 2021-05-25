import React from 'react'

export default function Name( { asset } ) {

    if (!asset.name) {
        return <h1 className='name wireframe'>Untitled</h1>;
    }
    else {
        return <h1 className='name wireframe'>{asset.name}</h1>;
    }

}
