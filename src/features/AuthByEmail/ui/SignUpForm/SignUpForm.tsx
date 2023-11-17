import React, { memo } from 'react';
import { Form, Button } from 'react-bootstrap';
import {
  Facebook,
  Google,
  Twitter,
  Github,
  Check,
} from 'react-bootstrap-icons';

export interface SignUpFormProps {
  className?: string;
  onSuccess: () => void;
}

const SignUpForm = memo(() => {
  return (
    <Form className="mt-4">
      <div className="text-center mb-3">
        <p>Sign up with:</p>
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
        <Form.Control type="text" id="registerName" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          id="registerUsername"
          placeholder="Username"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control type="email" id="registerEmail" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          id="registerPassword"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          type="password"
          id="registerRepeatPassword"
          placeholder="Repeat password"
        />
      </Form.Group>

      <div className="form-check d-flex justify-content-center mb-4">
        <Form.Check
          type="checkbox"
          id="registerCheck"
          label="I have read and agree to the terms"
          defaultChecked
        />
      </div>

      <Button type="submit" className="btn btn-primary btn-block mb-3">
        <Check className="me-2" />
        Sign up
      </Button>
    </Form>
  );
});

export default SignUpForm;
