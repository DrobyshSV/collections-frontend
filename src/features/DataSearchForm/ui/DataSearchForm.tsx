import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface DataSearchFormProps {
  className?: string;
}

export const DataSearchForm = memo(({ className }: DataSearchFormProps) => {
  return (
    <form
      className={classNames('col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3', {}, [
        className,
      ])}
    >
      <input
        type="search"
        className="form-control"
        placeholder="Search..."
        aria-label="Search"
      />
    </form>
  );
});
