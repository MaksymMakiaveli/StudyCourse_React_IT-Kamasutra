import React from 'react';
import { connect } from 'react-redux';
import { dialogsAC } from './../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  let { DataMessage, DataChats, newMessageText } = state.messagePage;
  return { DataMessage, DataChats, newMessageText };
};

const DialogsContainer = connect(mapStateToProps, dialogsAC)(Dialogs);

export default DialogsContainer;
