import React, { memo, Suspense } from 'react';

import { Navbar } from '@/widget/Navbar/ui/Navbar/Navbar';
import { Page } from '@/widget/Page/ui/Page';

import { AppRouter } from '../app/providers/AppRouter';

const App = memo(() => {
  return (
    <Suspense fallback="">
      <Navbar />
      <Page>
        <AppRouter />
      </Page>
    </Suspense>
  );
});
App.displayName = 'App';

export default App;
