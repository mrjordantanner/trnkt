import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card'

// gallery route that is the main view of the App
// uses css grid to display art assets or cards
// clicking on a card takes user to details page

export default function Gallery( { assetArray } ) {

	// useEffect(() => {
	// 	fetchCards();
	// }, []);

	// const fetchCards = () => {
	// 	fetch('')
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setCards(res);
	// 		})
	// 		.catch(console.error);
	// };

	return (
		<section className='gallery-container'>
			{assetArray.map((asset) => {
				return (
					<Card className='card' asset={asset}></Card>
				);
			})}
		</section>
	);
}
