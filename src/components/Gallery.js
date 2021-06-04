import React, { useRef } from 'react';
import Card from './Card'
import diamond from '../images/diamond.svg';

export default function Gallery( { data } ) {

	const gallery = useRef(null);

	const scrollToTop = () => {
		gallery.current.scrollTo({
		  top: 0,
		  behavior: "smooth"
		});
	  };

	//region [Blue]
	return (
		<div className='gallery-wrapper' ref={gallery}>
			<div id='top'></div>

			<div className='gem-background-wrapper'>
				<img className='gem-background invert' src={diamond} alt='diamond'/>
			</div>

			<div className='gallery-window'>
				<div className='gallery-container' >
					{data.map((asset) => {
						return <Card asset={asset} key={asset.id} />;
					})}
				</div>
				<footer className='footer'>
					<a className='button outline-secondary' onClick={scrollToTop} >Back to Top</a>
				</footer>
			</div>
		</div>
	);
}
//endregion