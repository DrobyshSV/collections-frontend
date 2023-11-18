import { memo, MutableRefObject, ReactNode, useRef } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  return (
    <main
      ref={wrapperRef}
      className={classNames('', {}, [className])}
      id={PAGE_ID}
    >
      {children}
    </main>
  );
});
