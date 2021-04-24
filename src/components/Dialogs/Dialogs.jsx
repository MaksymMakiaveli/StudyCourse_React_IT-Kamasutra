import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../Redux/state';
import CreateChats from './Chats/Chats';
import DialogsStyle from './Dialogs.module.css';
import СreateMessages from './Message/Message';

const Dialogs = (props) => {
	let arrMessages = props.messagePage.DataMessage.map((message) => {
		return <СreateMessages messages={message.messages} />;
	});
	let arrChats = props.messagePage.DataChats.map((dialog) => {
		return <CreateChats id={dialog.id} name={dialog.name} />;
	});

	let NewMessage = React.createRef();

	let addMessage = () => {
		props.dispatch(addMessageActionCreator());
	};
	let onMessageChange = () => {
		let sms = NewMessage.current.value;
		props.dispatch(updateNewMessageTextActionCreator(sms));
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
