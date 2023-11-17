import React, { memo, useCallback, useMemo, useState } from 'react';
import LOGO from '@/shared/assets/icons/data-collection.png';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Nav } from 'react-bootstrap';
import { AppImage } from '@/shared/ui/AppImage/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteMain } from '@/shared/consts/router';
import { useNavbarItems } from '../../model/selectors/getNavbarItems';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { UserDropdown } from '@/features/UserDropdown';
import { SignModal } from '@/features/AuthByEmail';
import { DataSearchForm } from '@/features/DataSearchForm';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = true;
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
          {2 ? (
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
