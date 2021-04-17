import React from 'react';
import ChatsStyle from './Chats.module.css';
import { NavLink } from 'react-router-dom';

const CreateChats = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={ChatsStyle.chats}>
			<NavLink to={path} className={ChatsStyle.chat_message}>
				{props.ChatsName}
			</NavLink>
		</div>
	);
};

let DataChats = [
	{ id: 1, name: 'Maks' },
	{ id: 2, name: 'Dimych' },
	{ id: 3, name: 'Karina' },
	{ id: 4, name: 'Alex' },
	{ id: 5, name: 'Philip' },
];

let arrChats = DataChats.map((dialog) => {
	return <CreateChats id={dialog.id} ChatsName={dialog.name} />;
});

const Chats = (props) => {
	return <div className={ChatsStyle.container_chats}>{arrChats}</div>;
};

export default Chats;
