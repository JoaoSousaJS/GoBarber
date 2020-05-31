import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/action';
import { signOut } from '~/store/modules/auth/action';
import AvatarInput from './AvatarInput';
import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Your email adress" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your actual password"
        />
        <Input
          type="password"
          name="password"
          placeholder="Your new password"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Repeat your new password"
        />

        <button type="submit"> Update Profile</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Exit from GoBarber
      </button>
    </Container>
  );
}

export default Profile;
