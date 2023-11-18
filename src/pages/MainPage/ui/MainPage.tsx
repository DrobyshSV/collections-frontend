import React, { memo, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

interface MainPageProps {
  className?: string;
}

const MainPage = memo(({}: MainPageProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <>
      <p>MainPage</p>
      <Button onClick={onThrow}>ERROR GO</Button>
    </>
  );
});

export default MainPage;
