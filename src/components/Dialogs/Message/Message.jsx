import React from "react";
import MessageStyle from "./Message.module.css"


let DataMessages = [
  { id: 1, messages: "Hi" },
  { id: 2, messages: "How are you?" },
  { id: 3, messages: "Yo" }
]


const СreateMesseges = (props) => {
  return (
    <div className={MessageStyle.qad}>
      <p className={MessageStyle.text_message}>{props.messages}</p>
    </div>
  )
}

const Message = (props) => {
  return (
    < div className={MessageStyle.container_message}>
      <div className={MessageStyle.message}>
        <СreateMesseges messages={DataMessages[0].messages} />
        <СreateMesseges messages={DataMessages[1].messages} />
        <СreateMesseges messages={DataMessages[2].messages} />
      </div>

    </div>
  )
}

export default Message;