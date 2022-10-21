import React, { useState, useEffect } from 'react';

function App() {
	return (
		<>
			<div className='App'>
				<div className='name'>
					<h1>Michael Baker</h1>
					<p>Front-End Developer</p>
				</div>
				<div className='nav'>
					<ul>
						<li>
							<a href='#'>Home</a>{' '}
						</li>
						<li>
							<a href='#'>Projects</a>{' '}
						</li>
						<li>
							<a href='#'>Info</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
