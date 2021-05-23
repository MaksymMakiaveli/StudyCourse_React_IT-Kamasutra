import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import MyPosts from './MyPosts/MyPosts';
import BackgroundProfile from './BackgroundProfile/BackgroundProfile';
import Preloader from '../common/Preloader/Preloader';

const Profile = ({ DataPost, newPostText, profile, addPost, updateNewPostText }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <BackgroundProfile />
      <ProfileDescription profile={profile} />
      <MyPosts DataPost={DataPost} newPostText={newPostText} updateNewPostText={updateNewPostText} addPost={addPost} />
    </div>
  );
};

export default Profile;
