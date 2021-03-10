import React from 'react'

export default function Card( { asset } ) {

    // Display component that represents the asset while in gallery view
        // Contains image, title, price, artist name, onClick takes user to details route

    return (
			<div>
				<div className='card-container'>
					{asset ? (
						<div>
                            <Link to={`/details/${asset.id}`} key={asset.id}></Link>
							<img src={asset.image} alt={asset.name} />
							<div className='details'>
								<h2>name{asset.name}</h2>
                                <p>details: </p>
							</div>
						</div>
					) : null}
				</div>
		</div>
		);
}
