import React from 'react';
import { Formik, Form, Field } from 'formik';
import Style from './Login.module.css';
import cl from 'classnames';
import { getLoginUser } from '../../Redux/auth-reducer';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Redirect } from 'react-router';

const validationLogin = yup.object().shape({
  email: yup.string().required('Заполните поле').email('Не правильно заполненный email'),
  password: yup.string().required('Заполните поле').min(6, 'Mинимум 6 символов'),
});

export const Login = ({ isAuth, getLoginUser }) => {
  if (isAuth) return <Redirect to='/profile' />;
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        validateOnBlur
        onSubmit={(values, { setSubmitting }) => {
          getLoginUser(values.email, values.password);
          setSubmitting(false);
          values.email = '';
          values.password = '';
        }}
        validationSchema={validationLogin}
      >
        {({ values, errors, touched, isValid, handleChange, handleBlur, handleSubmit, dirty }) => (
          <Form onSubmit={handleSubmit} className={Style.login_form}>
            <div className={Style.segment}>
              <h1 className={Style.title_login}>Sign up</h1>
            </div>
            <label className={Style.login_label}>
              <Field
                className={cl(Style.login_input, { [Style.login_input_error]: errors.email })}
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='Email'
              />
              {touched.email && errors.email && <p className={Style.error}>{errors.email}</p>}
            </label>

            <label className={Style.login_label}>
              <Field
                className={cl(Style.login_input, { [Style.login_input_error]: errors.password })}
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='Password'
              />
              {touched.password && errors.password && <p className={Style.error}>{errors.password}</p>}
            </label>

            <button className={Style.login_button} type='submit' disabled={!isValid && !dirty}>
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

let mapStateToProps = (state) => {
  let { isAuth } = state.auth;
  return { isAuth };
};

export let LoginContainer = connect(mapStateToProps, { getLoginUser })(Login);
