import React from 'react';
import Card from './Card'
import '../App.css';
import diamond from '../images/diamond.svg';
import HeaderGallery from './HeaderGallery';

export default function Gallery( { data } ) {

	document.body.style.backgroundColor = 'black';
	document.body.style.color = 'white';

	//#region [Blue]
	return (
		<div className='gallery-wrapper'>
			<HeaderGallery heading={'trnkt'} subheading={"Dive in to the strange world of NFT\'s"} image={diamond} />
			<div className='gallery-container'>
				{data.map((asset) => {
					return <Card asset={asset} key={asset.id} />;
				})}
			</div>

			<div className='nav-footer'>
				<ul>
					<a className='nav-link' href="#top">Back to Top</a>
				</ul>
					
			</div>

		</div>
	);
}
//#endregion