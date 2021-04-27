import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.store.getState();

	let newMessageText = state.messagePage.newMessageText;

	let addMessage = () => {
		if (newMessageText === '') {
			alert('Введите буквы в поле ввода');
		} else {
			props.store.dispatch(addMessageActionCreator());
		}
	};
	let onMessageChange = (sms) => {
		props.store.dispatch(updateNewMessageTextActionCreator(sms));
	};

	return (
		<Dialogs
			addMessage={addMessage}
			onMessageChange={onMessageChange}
			newMessageText={newMessageText}
			DataMessage={state.messagePage.DataMessage}
			DataChats={state.messagePage.DataChats}
		/>
	);
};

export default DialogsContainer;
