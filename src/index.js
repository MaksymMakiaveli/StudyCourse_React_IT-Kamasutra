import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './Redux/redux-store';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};
rerenderEntireTree();

store.subscribe(() => {
	rerenderEntireTree();
});

reportWebVitals();
