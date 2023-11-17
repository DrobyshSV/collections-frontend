import React, { memo, Suspense } from 'react';

import { Navbar } from '@/widget/Navbar/ui/Navbar/Navbar';

import { AppRouter } from '../app/providers/AppRouter';

const App = memo(() => {
  return (
    <Suspense fallback="">
      <Navbar />
      <AppRouter />
    </Suspense>
  );
});
App.displayName = 'App';

export default App;
