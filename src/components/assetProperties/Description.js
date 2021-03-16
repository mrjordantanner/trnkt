import React from 'react'

export default function Description( { asset }) {
    return (
        <p className='description'>{asset.description}</p>
    )
}
