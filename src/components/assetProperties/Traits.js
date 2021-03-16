import React from 'react'

export default function Traits( { asset } ) {

    if (!asset.traits) {
        return <li>no embedded traits</li>;
    }

    return (
		<>
			<div className='flex-row'>Traits</div>
			<ul className='traits-list'>
				{asset.traits.map((trait) => {
					return trait ? <li key={[trait.type, asset.id]}>{trait.type}: {trait.value}</li> : null;
				})}
			</ul>
		</>
	);


}
