import React from 'react';
import Style from './BackgroundProfile.module.css';
import Background from '../../../assets/images/BackgroundProfile.jpg'

export default function BackgroundProfile() {
  return (
    <>
      <div className={Style.background_profile}>
        <img
          alt=''
          className={Style.background_profile_img}
          src={Background}
        />
      </div>
    </>
  );
}
