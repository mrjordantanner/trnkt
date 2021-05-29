import React, { useEffect, useRef } from 'react';
import Card from './Card'
import diamond from '../images/diamond.svg';
import BlurBackground from './BlurBackground';
import { Link } from 'react-router-dom';

export default function Collection( { collection, removeFromCollection } ) {
   
    useEffect(() => {}, [collection])

	const collectionWindow = useRef(null);

	const scrollToTop = () => {
		collectionWindow.current.scrollTo({
		  top: 0,
		  behavior: "smooth"
		});
	  };

	//region [Violet]
    return (
			<div className='collection-wrapper' >

				<div className='gem-background-wrapper'>
					<img className='gem-background' src={diamond} />
				</div>

				<div className='header'>
					<div className='heading'>COLLECTION</div>
				</div>


				<div className='collection-container' ref={collectionWindow}>
					{/* <BlurBackground /> */}
					{collection.map((asset) => {
						return (
							<Card
								asset={asset}
								key={asset.id}
								removeFromCollection={removeFromCollection}
							/>
						);
					})}
				</div>

				<footer className='footer'>
					<a className='button outline' onClick={scrollToTop} >Back to Top</a>
				</footer>

			

		</div>
	);
}
//endregion
