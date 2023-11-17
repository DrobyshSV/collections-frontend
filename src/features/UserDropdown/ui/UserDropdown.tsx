import React, { memo, ReactNode, useCallback } from 'react';
import {
  getRouteAdmin,
  getRouteProfile,
} from '@/shared/consts/router';
import { Dropdown } from 'react-bootstrap';
import { AppLink } from '@/shared/ui/AppLink';

interface AvatarDropdownProps {
  className?: string;
}

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

export const UserDropdown = memo(({ className }: AvatarDropdownProps) => {
  const isAdmin = true;
  const authData = { id: '1' };

  const onLogout = useCallback(() => {
  }, []);

  const isAdminPanelAvailable = isAdmin;

  if (!authData) {
    return null;
  }
  const items: DropdownItem[] = [
    ...(isAdminPanelAvailable
      ? [
        {
          content: 'Admin',
          href: getRouteAdmin(),
        },
      ]
      : []),
    {
      content: 'Profile',
      href: getRouteProfile(authData.id),
    },
    {
      content: 'Logout',
      onClick: onLogout,
    },
  ];
  return (
    <Dropdown align='end' className={className}>
      <Dropdown.Toggle
        variant="link"
        id="dropdownUser1"
        className="d-block link-dark text-decoration-none"
      >
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => {
          if (item.href) {
            return (
              <Dropdown.Item as={AppLink} key={index} to={item.href} disabled={item.disabled ?? false}>
                {item.content}
              </Dropdown.Item>
            );
          }

          return (
            <Dropdown.Item key={index} onClick={item.onClick} disabled={item.disabled ?? false}>
              {item.content}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
});
