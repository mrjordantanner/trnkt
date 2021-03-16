import React from 'react'

export default function Price( { asset } ) {

	if (!asset.price) {
		return (
		<li className='flex-row'>
			<p>unsold</p>
		</li>
		)
	}
    return (
		<li className='flex-row'>
			<p>Last Trade Price</p>
			<p className='price'>{asset.price}</p>
		</li>
	);
}
