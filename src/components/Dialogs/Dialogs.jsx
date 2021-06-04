<<<<<<< HEAD
import React from "react";
import Chats from "./Chats/Chats";
import DialogsStyle from "./Dialogs.module.css"
import Message from "./Message/Message";


const Dialogs = (props) => {
  return (
    <div className={DialogsStyle.wrapper_dialogs}>
      <Chats />
      <Message />
    </div>
  )
}

export default Dialogs;
=======
import React from 'react';
import { Redirect } from 'react-router';
import CreateChats from './Chats/Chats';
import DialogsStyle from './Dialogs.module.css';
import СreateMessages from './Message/Message';

const Dialogs = ({ DataMessage, DataChats, newMessageText, addMessage, messageChange, isAuth }) => {
  let arrMessages = DataMessage.map((message) => {
    return <СreateMessages key={message.id} messages={message.messages} />;
  });
  let arrChats = DataChats.map((dialog) => {
    return <CreateChats key={dialog.id} id={dialog.id} name={dialog.name} />;
  });

  let onAddMessage = (e) => {
    e.preventDefault();
		newMessageText ? addMessage() : alert('Поле ввода не должно быть пустое');
  };
  let onMessageChange = (e) => {
    let sms = e.target.value;
    messageChange(sms);
  };

  if(!isAuth) return <Redirect to = '/login'/>
  return (  
    <>
      <div className={DialogsStyle.wrapper_dialogs}>
        <div className={DialogsStyle.container_chats}>{arrChats}</div>
        <div className={DialogsStyle.container_message}>
          <div className={DialogsStyle.message}>{arrMessages}</div>
        </div>
      </div>
      <form className={DialogsStyle.formMessage} onSubmit={onAddMessage}>
        <input
          onChange={onMessageChange}
          className={DialogsStyle.inputMessage}
          value={newMessageText}
          placeholder='Message...'
        />
        <button formTarget='_self' type='submit' className={DialogsStyle.buttonMessage}>
          Send Message
        </button>
      </form>
    </>
  );
};

export default Dialogs;
>>>>>>> lesson93Pagination
