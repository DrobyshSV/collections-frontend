import React, { memo } from 'react';

interface MainPageProps {
  className?: string;
}

const MainPage = memo(({}: MainPageProps) => {
  return <p>MainPage</p>;
});

export default MainPage;
