import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import {
  getRouteAbout,
  getRouteCollections,
  getRouteMain,
  getRouteProfile,
} from '@/shared/consts/router';

import { NavbarItemType } from '../types/navbar';

export const useNavbarItems = () => {
  const userData = useSelector(getUserAuthData);
  const navbarItemsList: NavbarItemType[] = [
    {
      path: getRouteMain(),
      Icon: 'House',
      title: 'Main',
    },
    {
      path: getRouteAbout(),
      Icon: 'Info',
      title: 'About',
    },
  ];

  if (userData) {
    navbarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: 'PersonFill',
        title: 'Profile',
        authOnly: true,
      },
      {
        path: getRouteCollections(),
        Icon: 'CollectionFill',
        title: 'Articles',
        authOnly: true,
      },
    );
  }

  return navbarItemsList;
};
