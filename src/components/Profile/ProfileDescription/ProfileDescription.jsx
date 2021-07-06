import React, { useState } from 'react';
import Styles from './ProfileDescription.module.css';
import { ProfileAvatar } from './ProfileAvatar/ProfileAvatar';
import { ProfileData, ProfileDataForm } from './ProfileData/ProfileData';

const ProfileDescription = ({ profile, status, updateStatus, isOwner, savePhoto, myProfile }) => {
  let [editMode, setEditMode] = useState(false);

  return (
    <div className={Styles.wrapper_description}>
      <ProfileAvatar profile={profile} isOwner={isOwner} myProfile={myProfile} savePhoto={savePhoto} />
      {editMode ? (
        <ProfileDataForm
          isOwner={isOwner}
          status={status}
          updateStatus={updateStatus}
          savePhoto={savePhoto}
          profile={profile}
          exitToEditMode={() => {
            setEditMode(false);
          }}
        />
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true);
          }}
          isOwner={isOwner}
          status={status}
          updateStatus={updateStatus}
          savePhoto={savePhoto}
          profile={profile}
        />
      )}
    </div>
  );
};

export default ProfileDescription;
