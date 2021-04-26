import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPostsStyle from './MyPosts.module.css';
import CreatePost from './Post/Post';

const MyPosts = (props) => {
	let arrPosts = props.DataPost.map((post) => {
		return <CreatePost post={post.post} />;
	});

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	};

	return (
		<div className={MyPostsStyle.wrapper}>
			<h3 className={MyPostsStyle.title}>My posts</h3>
			<form className={MyPostsStyle.formMyPost}>
				<input onChange={onPostChange} className={MyPostsStyle.input} value={props.newPostText} />
				<button onClick={addPost} formTarget='_self' type='button' className={MyPostsStyle.button}>
					Send
				</button>
			</form>

			<div>{arrPosts}</div>
		</div>
	);
};

export default MyPosts;
