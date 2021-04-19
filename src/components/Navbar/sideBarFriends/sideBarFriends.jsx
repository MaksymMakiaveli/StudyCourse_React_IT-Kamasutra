import React from 'react';
import friendStyles from './sideBarFriends.module.css';

const SideBarFriends = (props) => {
	return (
		<div>
			<div href='#' className={friendStyles.wrapper}>
				<a href='#'>
					<img className={friendStyles.avatar} src={props.avatar} alt='' />
				</a>
				<div>
					<a href='' className={friendStyles.nickname}>
						<p>{props.name}</p>
					</a>
				</div>
			</div>
		</div>
	);
};

export default SideBarFriends;
