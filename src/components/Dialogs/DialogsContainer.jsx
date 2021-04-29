import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from './../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		DataMessage: state.messagePage.DataMessage,
		DataChats: state.messagePage.DataChats,
		newMessageText: state.messagePage.newMessageText,
	};
};
let mapDispatchToProps = (dispatch) => {
	return {
		addMessage: () => {
			dispatch(addMessageActionCreator());
		},
		onMessageChange: (sms) => {
			dispatch(updateNewMessageTextActionCreator(sms));
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
