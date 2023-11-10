import { RouteProps } from 'react-router-dom';

export type UserRoles = 'admin' | 'user';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};
