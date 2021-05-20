import React from 'react';
import '../App.css';

export default function HeaderGallery({
	heading,
	subheading,
	image
}) {
	return (
		<div className='header'>
			<img className='diamond invert' src={image} />
			<div className='heading'>{heading}</div>
			<div className='subheading'>{subheading}</div>

		</div>
	);
}
