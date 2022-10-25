import React from 'react';

function Game(props) {
	const cells = props.arrOfObj.map((obj) => (
		<div
			style={{
				backgroundColor: 'white',
			}}
			className='game-item'
		>
			{obj}
		</div>
	));
	return <div className='container'>{cells}</div>;
}

export default Game;
