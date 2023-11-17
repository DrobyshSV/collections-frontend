import React, { useState , memo } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

type TabType = 'login' | 'register';

const SignForm = memo(() => {
  const [activeTab, setActiveTab] = useState<TabType>('register');

  const handleTabChange = (tabKey: TabType) => {
    setActiveTab(tabKey);
  };

  return (
    <Tabs justify className="mb-3" defaultActiveKey={activeTab}>
      <Tab eventKey="login" title="Login">
        <SignInForm />
      </Tab>
      <Tab eventKey="register" title="Register">
        <SignUpForm />
      </Tab>
    </Tabs>
  );
});

export default SignForm;
