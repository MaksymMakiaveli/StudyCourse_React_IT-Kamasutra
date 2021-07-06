import React from 'react';
import style from './Settings.module.css';
import { updateProfile } from '../../Redux/profile-reducer';
import Preloader from '../common/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Checkbox, Button, TextField } from '@material-ui/core';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  lookingForAJobDescription: yup.string().required(),
  aboutMe: yup.string().required(),
});

export const Settings = () => {
  const profile = useSelector((state) => state.profilePage.profile);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => dispatch(updateProfile(data));

  if (!profile) return <Preloader />;
  return (
    <>
      <div className={style.wrapper__settings}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.wrapper__required_input}>
            <TextField
              className={style.input__settings_profile}
              label='Full Name'
              defaultValue={profile.fullName}
              variant='outlined'
              {...register('fullName', { required: true })}
            />
            {errors.fullName && <p>{errors.username.message}</p>}
            {/* <Controller control={control} /> */}

            <TextField
              className={style.input__settings_profile}
              label='Job Description'
              defaultValue={profile.lookingForAJobDescription}
              {...register('lookingForAJobDescription')}
              variant='outlined'
            />

            <TextField
              className={style.input__settings_profile}
              variant='outlined'
              label='About Me'
              defaultValue={profile.aboutMe}
              {...register('aboutMe')}
            />

            <label htmlFor='lookingForAJob' className={style.label_checkbox}>
              looking For A Job
              <Controller
                name='lookingForAJob'
                control={control}
                id='lookingForAJob'
                render={({ field }) => (
                  <Checkbox defaultChecked={profile.lookingForAJob} {...field} />
                )}
              />
            </label>
          </div>
          <div className={style.wrapper__contacts_input}>
            {Object.keys(profile.contacts).map((key) => {
              return (
                <TextField
                  key={key}
                  {...register('contacts.' + key)}
                  defaultValue={profile.contacts[key]}
                  variant='outlined'
                  label={key}
                />
              );
            })}
          </div>
          <div className={style.wrapper__button_settings}>
            <Button variant='contained' color='secondary' type='submit' label='submit'>
              SAVE
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
