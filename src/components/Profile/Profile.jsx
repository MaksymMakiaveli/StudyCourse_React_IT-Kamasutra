import React from 'react';
import ProfileDescription from './ProfileDescription/ProfileDescription';
import MyPosts from './MyPosts/MyPosts';
import BackgroundProfile from './BackgroundProfile/BackgroundProfile';
import Preloader from '../common/Preloader/Preloader';

const Profile = ({
  DataPost,
  newPostText,
  profile,
  addPost,
  updateNewPostText,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  myProfile,
}) => {
  if (!profile || !myProfile) {
    return <Preloader />;
  }

  return (
    <div>
      <BackgroundProfile />

      <ProfileDescription
        myProfile={myProfile}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
      />

      <MyPosts
        DataPost={DataPost}
        profile={profile}
        newPostText={newPostText}
        updateNewPostText={updateNewPostText}
        addPost={addPost}
      />
    </div>
  );
};

export default Profile;
