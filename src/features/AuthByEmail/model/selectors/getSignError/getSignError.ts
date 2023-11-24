import { StateSchema } from '@/app/providers/StoreProvider';

export const getSignError = (state: StateSchema) => state?.signForm?.error;
