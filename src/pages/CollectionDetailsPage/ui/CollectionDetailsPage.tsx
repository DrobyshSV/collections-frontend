import React, { memo } from 'react';

interface CollectionsPageProps {
  className?: string;
}

const CollectionDetailsPage = memo(({}: CollectionsPageProps) => {
  return <p>CollectionsPage</p>;
});

export default CollectionDetailsPage;
