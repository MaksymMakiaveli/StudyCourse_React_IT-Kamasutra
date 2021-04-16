import React from "react";
import ChatsStyle from "./Chats.module.css"
import { NavLink } from "react-router-dom";


let DataChats = [
  { id: 1, name: "Maks" },
  { id: 2, name: "Dimych" },
  { id: 3, name: "Karina" },
  { id: 4, name: "Alex" },
  { id: 5, name: "Philip" }
]


const CreateChats = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={ChatsStyle.chats}>
      <NavLink to={path} className={ChatsStyle.chat_message}>{props.ChatsName}</NavLink>
    </div>
  )
}

const Chats = (props) => {
  return (
    <div className={ChatsStyle.container_chats}>
      <CreateChats id={DataChats[0].id} ChatsName={DataChats[0].name} />
      <CreateChats id={DataChats[1].id} ChatsName={DataChats[1].name} />
      <CreateChats id={DataChats[2].id} ChatsName={DataChats[2].name} />
      <CreateChats id={DataChats[3].id} ChatsName={DataChats[3].name} />
      <CreateChats id={DataChats[4].id} ChatsName={DataChats[4].name} />
    </div>
  )
}

export default Chats;