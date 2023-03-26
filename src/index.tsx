import ReactDOM from 'react-dom/client';
import { App } from './App';
import React from 'react';
import './assets/styles/_global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
