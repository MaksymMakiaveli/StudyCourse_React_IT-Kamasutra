import React from 'react';
import MessageStyle from './Message.module.css';

const СreateMessages = (props) => {
	return (
		<div className={MessageStyle.qad}>
			<p className={MessageStyle.text_message}>{props.messages}</p>
		</div>
	);
};

export default СreateMessages;
