import { FC, lazy } from 'react';

import { LoginFormProps } from './SignForm';

export const SignFormAsync = lazy<FC<LoginFormProps>>(
  () => import('./SignForm'),
);
