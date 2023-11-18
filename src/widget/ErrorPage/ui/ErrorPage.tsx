import { Button } from 'react-bootstrap';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames('container', {}, [className])}>
      <p className="m-2">SomethingWasWrong</p>
      <Button onClick={reloadPage}>Update page</Button>
    </div>
  );
};
