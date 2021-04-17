import React from 'react';
import MessageStyle from './Message.module.css';

const СreateMesseges = (props) => {
	return (
		<div className={MessageStyle.qad}>
			<p className={MessageStyle.text_message}>{props.messages}</p>
		</div>
	);
};

let DataMessages = [
	{ id: 1, messages: 'Hi' },
	{ id: 2, messages: 'How are you?' },
	{ id: 3, messages: 'Yo' },
];

let newDataMessages = DataMessages.map((message) => {
	return <СreateMesseges messages={message.messages} />;
});

const Message = (props) => {
	return (
		<div className={MessageStyle.container_message}>
			<div className={MessageStyle.message}>{newDataMessages}</div>
		</div>
	);
};

export default Message;
