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