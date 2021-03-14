import React from 'react'

export default function Traits( { asset } ) {

    // const traitsArray = 
    // asset.traits.traitsObject ?
    // asset.traits.traitsObject.map((trait) => {
    //     <li>{trait.type}{trait.value}</li>
    // }) : <li>No Trait Found</li>

    if (!asset.traits) {
        return <li>NO TRAITS</li>;
    }

    return (
		<ul className='traits-list'>
			{asset.traits.map((trait) => {
				return <li key={trait.type}>{trait.type}: {trait.value}</li>;
			})}
		</ul>
	);


}
