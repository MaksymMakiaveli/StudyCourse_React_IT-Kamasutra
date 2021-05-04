import React from 'react';
import Style from './Users.module.css';

let Users = (props) => {
	return (
		<div className={Style.grid_container}>
			{props.users.map((user) => {
				return (
					<div key={user.id} className={Style.wrapper_user}>
						<img className={Style.img_user} src={user.avatar} alt='' />

						{user.followed ? (
							<button
								onClick={() => {
									props.unfollow(user.id);
								}}
								className={Style.button}>
								UNFOLLOW
							</button>
						) : (
							<button
								onClick={() => {
									props.follow(user.id);
								}}
								className={Style.button}>
								FOLLOW
							</button>
						)}

						<div className={Style.desription_user}>
							<div className={Style.fullname_user}>
								<span className={Style.fullname}>{user.fullname}</span>
							</div>
							<div className={Style.location_user}>
								<span className={Style.location_country}>{user.location.country} </span>
								<span className={Style.location_city}>{user.location.city}</span>
							</div>
							<div className={Style.status_user}>
								<span className={Style.status}>{user.status}</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Users;
