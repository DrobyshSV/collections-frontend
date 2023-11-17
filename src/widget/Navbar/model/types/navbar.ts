import * as icons from 'react-bootstrap-icons';

export interface NavbarItemType {
  path: string;
  title: string;
  Icon: keyof typeof icons;
  authOnly?: boolean;
}
