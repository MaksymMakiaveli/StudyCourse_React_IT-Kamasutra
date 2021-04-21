import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import state, { subscribe } from './Redux/state';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './Redux/state';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addPost={addPost}
					updateNewPostText={updateNewPostText}
					addMessage={addMessage}
					updateNewMessageText={updateNewMessageText}
				/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
