import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps } from '@/shared/types/router';

import { routerConfig } from '../config/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={'LOADING>>>>>>>'}>{route.element}</Suspense>
    );
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
