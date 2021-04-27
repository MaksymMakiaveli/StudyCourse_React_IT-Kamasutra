import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	let state = props.store.getState();

	let newPostText = state.profilePage.newPostText;

	let addPost = () => {
		if (newPostText === '') {
			return alert('Введите буквы в поле ввода');
		} else {
			return props.store.dispatch(addPostActionCreator());
		}
	};

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostTextActionCreator(text));
	};

	return (
		<MyPosts
			addPost={addPost}
			onPostChange={onPostChange}
			DataPost={state.profilePage.DataPost}
			newPostText={state.profilePage.newPostText}
		/>
	);
};

export default MyPostsContainer;
