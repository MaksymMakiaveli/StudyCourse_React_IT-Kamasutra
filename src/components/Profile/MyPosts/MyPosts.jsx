import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import CreatePost from './Post/Post';

const MyPosts = (props) => {
	let arrPosts = props.DataPost.map((post) => {
		return <CreatePost post={post.post} />;
	});

	let newPostText = props.newPostText;

	let addPost = (e) => {
		e.preventDefault();
		props.addPost();
	};

	let onPostChange = (e) => {
		let text = e.target.value;
		props.onPostChange(text);
	};

	return (
		<div className={MyPostsStyle.wrapper}>
			<h3 className={MyPostsStyle.title}>My posts</h3>
			<form className={MyPostsStyle.formMyPost} onSubmit={addPost}>
				<input onChange={onPostChange} className={MyPostsStyle.input} value={newPostText} placeholder='Post...' />
				<button formTarget='_self' type='submit' className={MyPostsStyle.button}>
					Send
				</button>
			</form>

			<div>{arrPosts}</div>
		</div>
	);
};

export default MyPosts;
