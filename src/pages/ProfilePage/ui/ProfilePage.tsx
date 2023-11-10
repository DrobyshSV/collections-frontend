import React, { memo } from 'react';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = memo(({}: ProfilePageProps) => {
  return <p>ProfilePage</p>;
});

export default ProfilePage;
