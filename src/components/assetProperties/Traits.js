import React from 'react'

export default function Traits( { asset } ) {

    if (!asset.traits) {
        return <li><h3>No embedded traits.</h3></li>;
    }

    return (
		<>
			<div className='flex-row'><h3>Traits</h3></div>
			<ul className='traits-list'>
				{asset.traits.map((trait) => {
					return trait ? <li key={[trait.type, asset.id]}>{trait.type}: {trait.value}</li> : null;
				})}
			</ul>
		</>
	);


}
