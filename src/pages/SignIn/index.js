import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/action';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string().email('Put a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your email" />
        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">{loading ? 'Loading...' : 'Access'}</button>
        <Link to="/register">Create free acount</Link>
      </Form>
    </>
  );
}

export default SignIn;
