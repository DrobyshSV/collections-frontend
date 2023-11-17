import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { Nav } from 'react-bootstrap';
import { NavProps } from 'react-bootstrap/Nav';
import { LinkProps, NavLink } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';


type AppLinkPropsWithoutConflict = Omit<LinkProps, 'onWheelCapture'> & Omit<NavProps, 'onWheelCapture'>;

interface AppLinkProps extends AppLinkPropsWithoutConflict {
  className?: string;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = forwardRef(
  (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
      to,
      className,
      activeClassName = '',
      children,
      ...otherProps
    } = props;
    return (
      <NavLink
        as={Nav.Link}
        ref={ref}
        to={to}
        className={({ isActive }) =>
          classNames('', { [activeClassName]: isActive }, [
            className,
          ])
        }
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  },
);
