import React, { memo } from 'react';

interface AdminPageProps {
  className?: string;
}

const AdminPage = memo(({}: AdminPageProps) => {
  return <p>AdminPage</p>;
});

export default AdminPage;
