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
      <MyPosts DataPost={DataPost} newPostText={newPostText} updateNewPostText={updateNewPostText} addPost={addPost} />
    </div>
  );
};

export default Profile;
