export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  COLLECTIONS = 'collections',
  COLLECTION_DETAILS = 'collections_details',
  COLLECTION_CREATE = 'collections_create',
  COLLECTION_EDIT = 'collections_edit',
  ADMIN_MENU = 'admin_menu',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteCollections = () => '/collections';
export const getRouteCollectionDetails = (id: string) => `/collections/${id}`;
export const getRouteCollectionCreate = () => '/collections/new';
export const getRouteCollectionEdit = (id: string) => `/collections/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
