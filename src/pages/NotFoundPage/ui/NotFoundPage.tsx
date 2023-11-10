import React, { memo } from 'react';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = memo(({}: NotFoundPageProps) => {
  return <p>NotFoundPage</p>;
});

export default NotFoundPage;
