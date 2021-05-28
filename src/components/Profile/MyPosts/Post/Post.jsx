import React from 'react';
import PostStyle from './Post.module.css';
import profileNoAvatar from '../../../../assets/images/profileNoAvatar.png'

const CreatePost = ({profile,post}) => {
	return (
		<div className={PostStyle.post}>
			<img
				alt=''
				className={PostStyle.post_avatar}
				src={profile.photos.large ? profile.photos.large : profileNoAvatar}></img>
			<p className={PostStyle.post_text}>{post}</p>
		</div>
	);
};

export default CreatePost;
