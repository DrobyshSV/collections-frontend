import React, { memo, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Facebook, Google, Twitter, Github, Lock } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/config/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

import { getSignEmail } from '../../model/selectors/getSignEmail/getSignEmail';
import { getSignError } from '../../model/selectors/getSignError/getSignError';
import { getSignIsLoading } from '../../model/selectors/getSignIsLoading/getSignIsLoading';
import { getSignPassword } from '../../model/selectors/getSignPassword/getSignPassword';
import { signByEmail } from '../../model/services/signByEmail';
import { signActions } from '../../model/slice/signSlices';

export interface SignInFormProps {
  className?: string;
  onSuccess: () => void;
}

const SignInForm = memo(({ onSuccess }: SignInFormProps) => {
  const dispatch = useAppDispatch();

  const error = useSelector(getSignError);
  const isLoading = useSelector(getSignIsLoading);
  const password = useSelector(getSignPassword);
  const email = useSelector(getSignEmail);
  const forceUpdate = useForceUpdate();

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Email changed:', e.target.value);
      dispatch(signActions.setEmail(e.target.value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log('Password changed:', e.target.value);
      dispatch(signActions.setPassword(e.target.value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(signByEmail({ email, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      forceUpdate();
    }
  }, [dispatch, email, password, onSuccess, forceUpdate]);

  return (
    <Form className="mt-4">
      <div className="text-center mb-3">
        <p>Sign in with:</p>
        <Button variant="link" className="btn-floating mx-1">
          <Facebook />
        </Button>
        <Button variant="link" className="btn-floating mx-1">
          <Google />
        </Button>
        <Button variant="link" className="btn-floating mx-1">
          <Twitter />
        </Button>
        <Button variant="link" className="btn-floating mx-1">
          <Github />
        </Button>
      </div>

      <p className="text-center">or:</p>

      <Form.Group className="mb-4">
        <Form.Control
          type="email"
          id="email"
          placeholder="Email"
          onChange={onChangeEmail}
          value={email}
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          onChange={onChangePassword}
          type="password"
          id="loginPassword"
          placeholder="Password"
          value={password}
        />
      </Form.Group>

      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
          <Form.Check
            type="checkbox"
            id="loginCheck"
            label="Remember me"
            defaultChecked
          />
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <a>Forgot password?</a>
        </div>
      </div>

      <Button
        onClick={onLoginClick}
        disabled={isLoading}
        type="button"
        className="btn btn-primary btn-block mb-4"
      >
        <Lock className="me-2" />
        Sign in
      </Button>

      <div className="text-center">
        <p>
          Not a member? <a>Register</a>
        </p>
      </div>
    </Form>
  );
});

export default SignInForm;
