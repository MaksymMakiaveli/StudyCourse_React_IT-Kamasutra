import React from 'react';
import CreateChats from './Chats/Chats';
import СreateMessages from './Message/Message';
import DialogsStyle from './Dialogs.module.css';
import { render } from '@testing-library/react';

const Dialogs = (props) => {
	let arrMessages = props.messagePage.DataMessage.map((message) => {
		return <СreateMessages messages={message.messages} />;
	});
	let arrChats = props.messagePage.DataChats.map((dialog) => {
		return <CreateChats id={dialog.id} name={dialog.name} />;
	});

	let NewMessage = React.createRef();

	let addMessage = () => {
		props.addMessage();
	};
	let onMessageChange = () => {
		let sms = NewMessage.current.value;
		props.updateNewMessageText(sms);
	};

	return (
		<div>
			<div className={DialogsStyle.wrapper_dialogs}>
				<div className={DialogsStyle.container_chats}>{arrChats}</div>
				<div className={DialogsStyle.container_message}>
					<div className={DialogsStyle.message}>{arrMessages}</div>
				</div>
			</div>
			<form className={DialogsStyle.formMessage}>
				<input
					onChange={onMessageChange}
					ref={NewMessage}
					className={DialogsStyle.inputMessage}
					value={props.messagePage.newMessageText}
				/>
				<button onClick={addMessage} formTarget='_self' type='button' className={DialogsStyle.buttonMessage}>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Dialogs;
