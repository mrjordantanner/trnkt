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

			{/* <ul>
				<li>
					<a onClick={incrementOffset} className='button ghost prev'>
						Previous
					</a>
				</li>
				<li>
					<a onClick={randomizeOffset} className='button filled randomize'>
						R A N D O M I Z E
					</a>
				</li>
				<li>
					<a onClick={decrementOffset} className='button ghost next'>
						Next
					</a>
				</li>
			</ul> */}
		</div>
	);
}
