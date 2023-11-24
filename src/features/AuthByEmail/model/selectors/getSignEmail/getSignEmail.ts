import { StateSchema } from '@/app/providers/StoreProvider';

export const getSignEmail = (state: StateSchema) => state.signForm?.email || '';
