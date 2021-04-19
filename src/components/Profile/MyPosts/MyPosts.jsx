import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import CreatePost from './Post/Post';

const MyPosts = (props) => {
	let arrPosts = props.posts.map((post) => {
		return <CreatePost post={post.post} />;
	});

	let NewPost = React.createRef();

	let addPost = () => {
		let text = NewPost.current.value;
		alert(text);
	};

	return (
		<div className={MyPostsStyle.wrapper}>
			<h3 className={MyPostsStyle.title}>My posts</h3>
			<form className={MyPostsStyle.formMyPost}>
				<input ref={NewPost} className={MyPostsStyle.input}></input>
				<button onClick={addPost} formTarget='_self' type='button' className={MyPostsStyle.button}>
					Send
				</button>
			</form>
			<div>{arrPosts}</div>
		</div>
	);
};

export default MyPosts;
