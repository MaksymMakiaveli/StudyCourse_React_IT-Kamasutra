import React from 'react';
import PostStyle from './Post.module.css';

const CreatePost = (props) => {
	return (
		<div className={PostStyle.post}>
			<img
				className={PostStyle.post_avatar}
				src='https://image.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg'></img>
			<p className={PostStyle.post_text}>{props.post}</p>
		</div>
	);
};

export default CreatePost;
