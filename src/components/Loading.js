import React from 'react';
import '../App.css';

export default function Loading() {
	return (
		<div className='center'>
			{/* <div className='loading-logo'>trnkt</div> */}
			<div className='lds-facebook'>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
