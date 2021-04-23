import React from 'react';
import MyPostsStyle from './MyPosts.module.css';
import CreatePost from './Post/Post';

const MyPosts = (props) => {
	let arrPosts = props.DataPost.map((post) => {
		return <CreatePost post={post.post} />;
	});

	let NewPost = React.createRef();

	let addPost = () => {
		props.addPost();
		props.updateNewPostText('');
	};

	let onPostChange = () => {
		let text = NewPost.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={MyPostsStyle.wrapper}>
			<h3 className={MyPostsStyle.title}>My posts</h3>
			<form className={MyPostsStyle.formMyPost}>
				<input onChange={onPostChange} ref={NewPost} className={MyPostsStyle.input} value={props.newPostText} />
				<button onClick={addPost} formTarget='_self' type='button' className={MyPostsStyle.button}>
					Send
				</button>
			</form>

			<div>{arrPosts}</div>
		</div>
	);
};

export default MyPosts;
