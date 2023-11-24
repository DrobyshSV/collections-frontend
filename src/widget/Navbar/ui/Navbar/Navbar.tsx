import React, { memo, useCallback, useMemo, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { SignModal } from '@/features/AuthByEmail';
import { DataSearchForm } from '@/features/DataSearchForm';
import { UserDropdown } from '@/features/UserDropdown';
import LOGO from '@/shared/assets/icons/data-collection.png';
import { getRouteMain } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { AppLink } from '@/shared/ui/AppLink';

import { useNavbarItems } from '../../model/selectors/getNavbarItems';
import { NavbarItem } from '../NavbarItem/NavbarItem';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const navbarItemsList = useNavbarItems();

  const itemsList = useMemo(
    () =>
      navbarItemsList.map((item) => <NavbarItem item={item} key={item.path} />),
    [navbarItemsList],
  );
  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div
          className="d-flex flex-wrap align-items-center
           justify-content-center justify-content-lg-start"
        >
          <AppLink to={getRouteMain()} className="d-flex">
            <AppImage
              src={LOGO}
              width="32"
              height="32"
              className={classNames('img-fluid', {}, [
                'max-width: 100%',
                'height: auto',
              ])}
            />
          </AppLink>
          <Nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {itemsList}
          </Nav>
          <DataSearchForm />
          {!authData ? (
            <div className="col-md-3 text-end">
              <button
                onClick={onOpenModal}
                type="button"
                className="btn btn-outline-primary"
              >
                Sign-up
              </button>
            </div>
          ) : (
            <UserDropdown />
          )}
        </div>
      </div>
      {isAuthModal && <SignModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
