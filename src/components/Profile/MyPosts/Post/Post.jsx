import React from 'react';
import PostStyle from './Post.module.css';

const CreatePost = (props) => {
	return (
		<div className={PostStyle.post}>
			<img className={PostStyle.post_avatar} src='https://image.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg'></img>
			<p className={PostStyle.post_text}>{props.post}</p>
		</div>
	);
};

let DataPost = [
	{ id: 1, post: 'Hi, how are you?' },
	{ id: 2, post: "It's my first post" },
	{ id: 3, post: 'Yo' },
];

let postsElements = DataPost.map((post) => {
	return <CreatePost post={post.post} />;
});

const Post = (props) => {
	return <div>{postsElements}</div>;
};

export default Post;
