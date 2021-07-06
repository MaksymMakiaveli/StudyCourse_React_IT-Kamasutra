import React from 'react';
import { ProfileStatus } from '../ProfileStatus/ProfileStatusHock';
import { ProfileContacts } from '../ProfileContacts/ProfileContacts';
import Styles from './ProfileData.module.css';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Checkbox, Button, TextField } from '@material-ui/core';
import { updateProfile } from '../../../../Redux/profile-reducer.js';

export const ProfileData = ({ profile, updateStatus, status, isOwner, goToEditMode }) => {
  return (
    <>
      <div className={Styles.description_text}>
        <h2 className={Styles.description_namePerson}>
          {profile.fullName.toUpperCase() || 'Loading'}
        </h2>
        <ul className={Styles.description_list}>
          <li className={Styles.description_list_item}>
            Status:
            <span className={Styles.status}>
              <ProfileStatus status={status} updateStatus={updateStatus} />
            </span>
          </li>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <li key={key} className={Styles.description_list_item}>
                <ProfileContacts contactTitle={key} contactValue={profile.contacts[key]} />
              </li>
            );
          })}
          <li className={Styles.description_list_item}>
            <span className={Styles.title_contacts}>{Object.keys(profile)[0]}:</span>
            {profile.aboutMe}
          </li>
          <li className={Styles.description_list_item}>
            <span className={Styles.title_contacts}>{Object.keys(profile)[2]}:</span>
            {profile.lookingForAJob ? 'yes' : 'no'}
          </li>
          <li className={Styles.description_list_item}>
            <span className={Styles.title_contacts}>{Object.keys(profile)[3]}:</span>
            {profile.lookingForAJobDescription}
          </li>
        </ul>
        {isOwner ? <button onClick={goToEditMode} className={Styles.edit_button}></button> : null}
      </div>
    </>
  );
};

export const ProfileDataForm = ({ profile, updateStatus, status, exitToEditMode }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    dispatch(updateProfile(data));
    exitToEditMode();
  };
  return (
    <form className={Styles.description_text} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={Styles.description_namePerson}>{profile.fullName.toUpperCase()}</h2>
      <ul className={Styles.description_list}>
        <li className={Styles.description_list_item}>
          Status:
          <span className={Styles.status}>
            <ProfileStatus status={status} updateStatus={updateStatus} />
          </span>
        </li>
        <li className={Styles.description_list_item}>
          <TextField
            label='Full Name'
            defaultValue={profile.fullName}
            id='standard-basic'
            {...register('fullName')}
          />
        </li>
        <li className={Styles.description_list_item}>
          <TextField
            label='Job Description'
            defaultValue={profile.lookingForAJobDescription}
            {...register('lookingForAJobDescription')}
            id='standard-basic'
          />
        </li>
        {/* 
        <Controller
          control={control}
          defaultValue={profile.fullName}
          render={({ onBlur, onChange, value }) => (
            <>
              <li>
                <TextField
                  label={value}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  {...register('fullName')}
                />
              </li>
            </>
          )}
        /> */}

        <li className={Styles.description_list_item}>
          <TextField
            id='standard-basic'
            label='About Me'
            defaultValue={profile.aboutMe}
            {...register('aboutMe')}
          />
        </li>
        <label htmlFor='lookingForAJob'>
          looking For A Job
          <Controller
            name='lookingForAJob'
            control={control}
            id='lookingForAJob'
            render={({ field, value }) => (
              <Checkbox defaultChecked={profile.lookingForAJob} value={value} {...field} />
            )}
          />
        </label>
        {/* {Object.keys(profile.contacts).map((key) => {
          return (
            <li key={key} className={Styles.description_list_item}>
              <TextField
                label={key}
                defaultValue={profile.contacts[key]}
                id='standard-basic'
                {...register('contacts.' + key)}
              />
            </li>
          );
        })} */}
      </ul>
      <Button id='standard-basic' color='secondary' type='submit' label='submit'>
        SAVE
      </Button>
    </form>
  );
};
