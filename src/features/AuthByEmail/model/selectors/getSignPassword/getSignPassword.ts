import { StateSchema } from '@/app/providers/StoreProvider';

export const getSignPassword = (state: StateSchema) =>
  state?.signForm?.password || '';
