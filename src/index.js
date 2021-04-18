import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DataPost = [
	{ id: 1, post: 'Hi, how are you?' },
	{ id: 2, post: "It's my first post" },
	{ id: 3, post: 'Yo' },
];

let DataMessages = [
	{ id: 1, messages: 'Hi' },
	{ id: 2, messages: 'How are you?' },
	{ id: 3, messages: 'Yo' },
];
let DataChats = [
	{ id: 1, name: 'Maks' },
	{ id: 2, name: 'Dimych' },
	{ id: 3, name: 'Karina' },
	{ id: 4, name: 'Alex' },
	{ id: 5, name: 'Philip' },
];

ReactDOM.render(
	<React.StrictMode>
		<App DataPost={DataPost} DataMessages={DataMessages} DataChats={DataChats} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
