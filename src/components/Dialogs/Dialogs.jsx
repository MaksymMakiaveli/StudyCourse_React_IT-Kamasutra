import React from 'react';
import CreateChats from './Chats/Chats';
import DialogsStyle from './Dialogs.module.css';
import СreateMessages from './Message/Message';

const Dialogs = ({ DataMessage, DataChats, newMessageText, addMessage, messageChange }) => {
  let arrMessages = DataMessage.map((message) => {
    return <СreateMessages messages={message.messages} />;
  });
  let arrChats = DataChats.map((dialog) => {
    return <CreateChats id={dialog.id} name={dialog.name} />;
  });
  let onNewMessageText = newMessageText;

  let onAddMessage = (e) => {
    e.preventDefault();
		onNewMessageText ? addMessage() : alert('Поле ввода не должно быть пустое');
  };
  let onMessageChange = (e) => {
    let sms = e.target.value;
    messageChange(sms);
  };

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
          value={onNewMessageText}
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
