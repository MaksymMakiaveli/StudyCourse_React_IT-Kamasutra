import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState();

				let newPostText = state.profilePage.newPostText;

				let addPost = () => {
					if (newPostText === '') {
						return alert('Введите буквы в поле ввода');
					} else {
						return store.dispatch(addPostActionCreator());
					}
				};

				let onPostChange = (text) => {
					store.dispatch(updateNewPostTextActionCreator(text));
				};
				return (
					<MyPosts
						addPost={addPost}
						onPostChange={onPostChange}
						DataPost={state.profilePage.DataPost}
						newPostText={state.profilePage.newPostText}
					/>
				);
			}}
		</StoreContext.Consumer>
	);
};

export default MyPostsContainer;
