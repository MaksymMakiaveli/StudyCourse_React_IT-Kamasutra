import React from 'react';
import StoreContext from '../../StoreContext';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState();

				let newMessageText = state.messagePage.newMessageText;

				let addMessage = () => {
					if (newMessageText === '') {
						alert('Введите буквы в поле ввода');
					} else {
						store.dispatch(addMessageActionCreator());
					}
				};
				let onMessageChange = (sms) => {
					store.dispatch(updateNewMessageTextActionCreator(sms));
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
			}}
		</StoreContext.Consumer>
	);
};

export default DialogsContainer;
