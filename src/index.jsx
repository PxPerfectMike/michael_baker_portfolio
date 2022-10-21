import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createRoot } from './createRoot.js';

const rootElement = createRoot();

if (!rootElement) {
	throw new Error('No root element found');
}
ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
