<<<<<<< HEAD
import React from "react";
import AvatarPlusDescription from "./AvatarPlusDescription/AvatarPlusDescription";
import MyPosts from "./MyPosts/MyPosts";

import ProfileStyles from "./Profile.module.css";

const Profile = () => {
  return (<div >
    <div className={ProfileStyles.background_profile}>
      <img
        className={ProfileStyles.background_profile_img}
        src="https://image.freepik.com/free-vector/leaves-background-with-metallic-foil_79603-956.jpg">
      </img>
    </div>
    <AvatarPlusDescription />
    <MyPosts />

  </div>)
}

export default Profile;
=======
import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import MyPosts from './MyPosts/MyPosts';
import BackgroundProfile from './BackgroundProfile/BackgroundProfile';
import Preloader from '../common/Preloader/Preloader';

const Profile = ({ DataPost, newPostText, profile, addPost, updateNewPostText,status ,updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <BackgroundProfile />
      <ProfileDescription profile={profile} status={status} updateStatus={updateStatus}/>
      <MyPosts DataPost={DataPost} profile={profile} newPostText={newPostText} updateNewPostText={updateNewPostText} addPost={addPost} />
    </div>
  );
};

export default Profile;
>>>>>>> lesson93Pagination
