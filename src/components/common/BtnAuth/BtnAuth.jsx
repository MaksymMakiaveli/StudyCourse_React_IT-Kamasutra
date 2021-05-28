import React from 'react';
import { Button } from 'primereact/button';
import cl from 'classnames';
import Style from './Btn.module.css';

export const BtnAuthFalse = () => {
  return (
    <div className={cl(Style.btn_auth)}>
      <Button icon='pi pi-user' label='Log In' className={cl()} />
    </div>
  );
};

export const BtnAuthTrue = () => {
  return (
    <div className={cl(Style.btn_auth)}>
      <Button label='Submit' icon='pi pi-check' className={cl('p-button-success')} />
    </div>
  );
};

export const BtnLogout = ({logoutUser}) => {
  return (
    <div className={cl(Style.btn_auth)}>
      <Button onClick={logoutUser} label='Log Out' icon='pi pi-times' className={cl('p-button-danger')} />
    </div>
  );
};
