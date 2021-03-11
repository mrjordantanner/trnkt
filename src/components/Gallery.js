import React, { useState, useEffect } from 'react';
import Card from './Card'

// gallery route that is the main view of the App
// uses css grid to display art assets or cards
// clicking on a card takes user to details page

export default function Gallery( { data } ) {

	//#region [Violet]
	return (
		<section className='gallery-container'>
			{data.map((asset) => {
				return <Card asset={asset} key={asset.id} />;
			})}
		</section>
	);
}
//#endregion