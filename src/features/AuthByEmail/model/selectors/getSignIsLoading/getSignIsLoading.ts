import { StateSchema } from '@/app/providers/StoreProvider';

export const getSignIsLoading = (state: StateSchema) =>
  state?.signForm?.isLoading || false;
