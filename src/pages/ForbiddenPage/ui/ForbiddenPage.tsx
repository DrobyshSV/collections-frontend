import React, { memo } from 'react';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = memo(({}: ForbiddenPageProps) => {
  return <p>ForbiddenPage</p>;
});

export default ForbiddenPage;
