import React, { memo } from 'react';

interface AboutPageProps {
  className?: string;
}

const AboutPage = memo(({}: AboutPageProps) => {
  return <p>AboutPage</p>;
});

export default AboutPage;
