import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

interface SignByEmailProps {
  email: string;
  password: string;
}

export const signByEmail = createAsyncThunk<
  User,
  SignByEmailProps,
  ThunkConfig<string>
>('auth/login', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;
  try {
    const response = await extra.api.post<User>('/auth/login', authData);

    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem('token', JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});
