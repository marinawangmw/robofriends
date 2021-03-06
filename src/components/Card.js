import React from 'react';

// index importa robots, y se lo pasa a card
const Card = ({name,email,id}) => {
	return (
		<div className='tc grow bg-light-green br3 pa2 ma2 dib bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>);
} 

export default Card;