import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import CreatePost from './Post/Post';

const MyPosts = (props) => {
	let arrPosts = props.posts.map((post) => {
		return <CreatePost post={post.post} />;
	});

	return (
		<div className={MyPostsStyle.wrapper}>
			<h3 className={MyPostsStyle.title}>My posts</h3>
			<form>
				<input className={MyPostsStyle.input}></input>
				<button formTarget='_self' className={MyPostsStyle.button}>
					Send
				</button>
			</form>
			<div>{arrPosts}</div>
		</div>
	);
};

export default MyPosts;
