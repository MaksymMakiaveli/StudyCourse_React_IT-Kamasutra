import React from 'react';
import CreateChats from './Chats/Chats';
import СreateMessages from './Message/Message';
import DialogsStyle from './Dialogs.module.css';
import { render } from '@testing-library/react';

const Dialogs = (props) => {
	let arrMessages = props.state.DataMessage.map((message) => {
		return <СreateMessages messages={message.messages} />;
	});
	let arrChats = props.state.DataChats.map((dialog) => {
		return <CreateChats id={dialog.id} name={dialog.name} />;
	});

	let newMessage = React.createRef();

	let addNewMessage = () => {
		let text = newMessage.current.value;
		alert(text);
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
				<input ref={newMessage} className={DialogsStyle.inputMessage}></input>
				<button onClick={addNewMessage} formTarget='_self' type='button' className={DialogsStyle.buttonMessage}>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Dialogs;
