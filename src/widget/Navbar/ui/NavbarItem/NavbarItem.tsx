import React, { memo } from 'react';
import { AppLink } from '@/shared/ui/AppLink';

import { NavbarItemType } from '../../model/types/navbar';
import { Icon } from '@/shared/ui/Icon';

interface NavbarItemProps {
  item: NavbarItemType;
}

export const NavbarItem = memo(({ item }: NavbarItemProps) => {
  const isAuth = true;

  if (item.authOnly && !isAuth) {
    return null;
  }
  return (
    <li>
      <AppLink to={item.path} className="nav-link px-2">
        <Icon iconName={item.Icon} />
        {item.title}
      </AppLink>
    </li>
  );
});
