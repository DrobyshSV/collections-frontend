import React, { useState, memo, useCallback } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/config/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

import { getSignEmail } from '../../model/selectors/getSignEmail/getSignEmail';
import { getSignError } from '../../model/selectors/getSignError/getSignError';
import { getSignIsLoading } from '../../model/selectors/getSignIsLoading/getSignIsLoading';
import { getSignPassword } from '../../model/selectors/getSignPassword/getSignPassword';
import { signByEmail } from '../../model/services/signByEmail';
import { signActions, signReducer } from '../../model/slice/signSlices';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

export interface SignFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  signForm: signReducer,
};

type TabType = 'login' | 'register';

const SignForm = memo(({ onSuccess }: SignFormProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('register');

  const handleTabChange = (tabKey: TabType) => {
    setActiveTab(tabKey);
  };

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <Tabs justify className="mb-3" defaultActiveKey={activeTab}>
        <Tab eventKey="login" title="Login">
          <SignInForm onSuccess={onSuccess} />
        </Tab>
        <Tab eventKey="register" title="Register">
          <SignUpForm />
        </Tab>
      </Tabs>
    </DynamicModuleLoader>
  );
});

export default SignForm;
