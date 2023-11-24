import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPage } from '@/pages/AdminPage';
import { CollectionDetailsPage } from '@/pages/CollectionDetailsPage';
import { CollectionEditPage } from '@/pages/CollectionEditPage';
import { CollectionsPage } from '@/pages/CollectionsPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
  AppRoutes,
  getRouteAbout,
  getRouteAdmin,
  getRouteCollectionCreate,
  getRouteCollectionDetails,
  getRouteCollectionEdit,
  getRouteCollections,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile,
} from '@/shared/consts/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.COLLECTIONS]: {
    path: getRouteCollections(),
    element: <CollectionsPage />,
    authOnly: true,
  },
  [AppRoutes.COLLECTION_DETAILS]: {
    path: getRouteCollectionDetails(':id'),
    element: <CollectionDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.COLLECTION_CREATE]: {
    path: getRouteCollectionCreate(),
    element: <CollectionEditPage />,
    authOnly: true,
  },
  [AppRoutes.COLLECTION_EDIT]: {
    path: getRouteCollectionEdit(':id'),
    element: <CollectionEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_MENU]: {
    path: getRouteAdmin(),
    element: <AdminPage />,
    authOnly: true,
    roles: [UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
