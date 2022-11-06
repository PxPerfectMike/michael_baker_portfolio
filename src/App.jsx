import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Game from './components/Game';

function App() {
	const pageElements = ['home', 'projects', 'info', 'contact', 'game'];
	const [shownElement, setShownElement] = useState(''); // this line is necessary do not delete it when cleaning up dev code
	// the shown element window location hash and if statement below are for dev purposes only. It is to improve productivity by starting on the working component instead instead of the home page component.
	if (shownElement === '') {
		setShownElement(pageElements[4]);
		window.location.hash = 'welcome_to_my_portfolio!_I_hope_you_love_it!';
	}

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
							<a id='home-nav' href='#' onClick={() => setShownElement('home')}>
								Home
							</a>
						</li>
						<li>
							<a
								id='projects-nav'
								href='#'
								onClick={() => setShownElement('projects')}
							>
								Projects
							</a>{' '}
						</li>
						<li>
							<a id='info-nav' href='#' onClick={() => setShownElement('info')}>
								Info
							</a>
						</li>
						<li>
							<a
								id='contact-nav'
								href='#'
								onClick={() => setShownElement('contact')}
							>
								Contact
							</a>
						</li>
						<li>
							<a id='game' href='#' onClick={() => setShownElement('game')}>
								Game
							</a>
						</li>
					</ul>
				</div>
				<div className='content-container'>
					{/* begin element display */}

					{shownElement === 'home' && (
						<motion.div
							className='dynamic-div'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 50,
								damping: 20,
							}}
						>
							<h2>Welcome to the homescreen</h2>
							<p>I hope you enjoy your stay</p>
						</motion.div>
					)}
					{shownElement === 'projects' && (
						<motion.div
							className='dynamic-div'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 50,
								damping: 20,
							}}
						>
							<h2>Here are some of my projects</h2>
							<p>
								Here are some of my projects. I have many more, but I am still
								working on them.
							</p>
						</motion.div>
					)}
					{shownElement === 'info' && (
						<motion.div
							className='dynamic-div'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 50,
								damping: 20,
							}}
						>
							<h2>Here is some info about me</h2>
							<p>
								I am a front-end developer. I am currently learning React and
								React Native. I am also learning Node.js and Express.js.
							</p>
						</motion.div>
					)}
					{shownElement === 'contact' && (
						<motion.div
							className='dynamic-div'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 50,
								damping: 20,
							}}
						>
							<h2>Here is how to contact me</h2>
							<p>You can contact me at pxperfectmike@gmail.com</p>
						</motion.div>
					)}
					{shownElement === 'game' && (
						<motion.div
							className='dynamic-div'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 50,
								damping: 20,
							}}
						>
							<Game />
							<h2>Here is a game I made</h2>
							<p>
								Here is a game I made. It is a simple game where you have to
								click on the correct button. If you click on the wrong button,
								you lose. If you click on the correct button, you win. You can
								also click on the reset button to reset the game.
							</p>
						</motion.div>
					)}
					{/* end element display */}
				</div>
			</div>
		</>
	);
}

export default App;
