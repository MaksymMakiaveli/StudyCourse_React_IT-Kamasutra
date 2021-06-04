import React from 'react';
import MessageStyle from './Message.module.css';

const СreateMessages = ({ messages }) => {
  return (
    <div className={MessageStyle.qad}>
      <p className={MessageStyle.text_message}>{messages}</p>
    </div>
  );
};

export default СreateMessages;
