import { FC, lazy } from 'react';

import { SignFormProps } from './SignForm';

export const SignFormAsync = lazy<FC<SignFormProps>>(
  () => import('./SignForm'),
);
