import React from 'react';
import CreateChats from './Chats/Chats';
import СreateMessages from './Message/Message';
import DialogsStyle from './Dialogs.module.css';
import { render } from '@testing-library/react';

const Dialogs = (props) => {
	let arrMessages = props.DataMessages.map((message) => {
		return <СreateMessages messages={message.messages} />;
	});
	let arrChats = props.DataChats.map((dialog) => {
		return <CreateChats id={dialog.id} name={dialog.name} />;
	});

	return (
		<div className={DialogsStyle.wrapper_dialogs}>
			<div className={DialogsStyle.container_chats}>{arrChats}</div>
			<div className={DialogsStyle.container_message}>
				<div className={DialogsStyle.message}>{arrMessages}</div>
			</div>
		</div>
	);
};

export default Dialogs;
