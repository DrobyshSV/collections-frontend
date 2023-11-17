import * as icons from 'react-bootstrap-icons';

export interface IconProps extends icons.IconProps {
  iconName: keyof typeof icons;
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  // eslint-disable-next-line import/namespace
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
};
