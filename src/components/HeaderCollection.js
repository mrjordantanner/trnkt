import React from 'react';
import '../App.css';

export default function HeaderCollection({
	heading,
	subheading,
	image
}) {
	return (
		<div className='header'>
			<img className='diamond' src={image} />
			<div className='heading'>{heading}</div>
			<div className='subheading'>{subheading}</div>
		</div>
	);
}
