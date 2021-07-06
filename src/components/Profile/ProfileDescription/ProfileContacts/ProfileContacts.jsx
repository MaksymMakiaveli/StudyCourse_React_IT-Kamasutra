import React from 'react';

import Styles from './ProfileContacts.module.css';

export const ProfileContacts = ({ contactTitle, contactValue }) => {
  let noInformation = <span className={Styles.noInformation}>Информации нету</span>;
  return (
    <>
      <span className={Styles.title_contacts}>{contactTitle}:</span>
      <a className={Styles.value_contacts} href='##'>
        {contactValue === null ? noInformation : contactValue}
      </a>
    </>
  );
};
