import React from 'react';
import Styles from './ProfileAvatar.module.css';
import profileNoAvatar from '../../../../assets/images/profileNoAvatar.png';
import cl from 'classnames';

export const ProfileAvatar = ({ isOwner, myProfile, savePhoto, profile }) => {
  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };

  let currentPhoto = () => {
    if (isOwner) return myProfile.photos.large;
    if (!isOwner) return profile.photos.large;
  };
  let photo = currentPhoto();

  return (
    <div className={cl(Styles.wrapper_img, { [Styles.wrapper_img_opacity]: isOwner })}>
      <img
        src={photo || profileNoAvatar}
        alt=''
        className={cl(Styles.description_avatar, { [Styles.opacity_avatar]: isOwner })}
      />
      {isOwner && (
        <label htmlFor='uploadAvatar'>
          <input
            type='file'
            name='avatar'
            id='uploadAvatar'
            className={Styles.upload_avatar}
            onChange={onMainPhotoSelected}
          />
          <i
            className={cl('pi', 'pi-image', Styles.icon_label)}
            style={{ fontSize: '3rem', color: 'white' }}></i>
        </label>
      )}
    </div>
  );
};
