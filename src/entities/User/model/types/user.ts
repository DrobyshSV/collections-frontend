import { UserRole } from '../consts/consts';

export interface User {
  id: string;
  username: string;
  roles?: Array<UserRole>;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
