import { lazy } from 'react';

export const CollectionDetailsPageAsync = lazy(
  () => import('./CollectionDetailsPage'),
);
