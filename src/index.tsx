import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/app/styles/index.scss';

import App from './app/App';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Container root is not find');
}

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
