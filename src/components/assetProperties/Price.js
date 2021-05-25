import React from 'react'

export default function Price( { asset } ) {

	if (!asset.price) {
		return (
		<li className='flex-row'>
			<h3>Price: Unsold</h3>
		</li>
		)
	}
    return (
		<li className='flex-row'>
			<h3>Last Trade Price</h3>
			<p className='price'>{asset.price}</p>
		</li>
	);
}
