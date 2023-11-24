import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { signByEmail } from '../services/signByEmail';
import { SignSchema } from '../types/signSchema';

const initialState: SignSchema = {
  isLoading: false,
  email: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signByEmail.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(signByEmail.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(signByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: signActions } = loginSlice;
export const { reducer: signReducer } = loginSlice;
