import React from 'react';
import Card from './Card'
import '../App.css';
// gallery route that is the main view of the App
// uses css grid to display art assets or cards
// clicking on a card takes user to details page

export default function Gallery( { data } ) {

	//#region [Blue]
	return (
		<div className='gallery-wrapper'>
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