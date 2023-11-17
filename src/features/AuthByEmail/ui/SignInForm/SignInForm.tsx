import React, { memo } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Facebook, Google, Twitter, Github, Lock } from 'react-bootstrap-icons';

export interface SignInFormProps {
  className?: string;
  onSuccess: () => void;
}

const SignInForm = memo(() => {
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
          id="loginName"
          placeholder="Email or username"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          id="loginPassword"
          placeholder="Password"
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

      <Button type="submit" className="btn btn-primary btn-block mb-4">
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
