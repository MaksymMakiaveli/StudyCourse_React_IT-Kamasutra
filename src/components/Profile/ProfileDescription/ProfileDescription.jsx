import React from 'react';
import Styles from './ProfileDescription.module.css';
import profileNoAvatar from '../../../assets/images/profileNoAvatar.png';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';

const ProfileDescription = ({ profile,status,updateStatus }) => {
  let noInformation = <span className={Styles.noInformation}>Информации нету</span>;

  return (
    <div className={Styles.wrapper_description}>
      <img
        src={profile.photos.large ? profile.photos.large : profileNoAvatar}
        alt=''
        className={Styles.description_avatar}
      />
      <div className={Styles.description_text}>
        <h2 className={Styles.description_namePerson}>{profile.fullName.toUpperCase()}</h2>
        <ul className={Styles.description_list}>
          <li className={Styles.description_list_item}>
            GitHub: {profile.contacts.github ? <a href='##'>{profile.contacts.github}</a> : noInformation}
          </li>
          <li className={Styles.description_list_item}>
            Facebook: <a href='##'>{profile.contacts.facebook ? profile.contacts.facebook : noInformation}</a>
          </li>
          <li className={Styles.description_list_item}>
            Vk: <a href='##'>{profile.contacts.vk ? profile.contacts.vk : noInformation}</a>
          </li>
          <li className={Styles.description_list_item}>
            
            Status: <span className={Styles.status}><ProfileStatus status={status} updateStatus={updateStatus}/></span>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDescription;
