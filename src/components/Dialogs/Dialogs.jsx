import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../Redux/dialogs-reducer';
import CreateChats from './Chats/Chats';
import DialogsStyle from './Dialogs.module.css';
import СreateMessages from './Message/Message';

const Dialogs = (props) => {
	let arrMessages = props.DataMessage.map((message) => {
		return <СreateMessages messages={message.messages} />;
	});
	let arrChats = props.DataChats.map((dialog) => {
		return <CreateChats id={dialog.id} name={dialog.name} />;
	});
	let newMessageText = props.newMessageText;

	let addMessage = () => {
		props.addMessage();
	};
	let onMessageChange = (e) => {
		let sms = e.target.value;
		props.onMessageChange(sms);
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
					className={DialogsStyle.inputMessage}
					value={newMessageText}
					placeholder='Message...'
				/>
				<button onClick={addMessage} formTarget='_self' type='button' className={DialogsStyle.buttonMessage}>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Dialogs;
