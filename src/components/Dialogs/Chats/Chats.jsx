import React from 'react';
import ChatsStyle from './Chats.module.css';
import { NavLink } from 'react-router-dom';

const CreateChats = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={ChatsStyle.chats}>
      <NavLink to={path} className={ChatsStyle.chat_message}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default CreateChats;
