import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import { Loader } from './components';

const App = React.lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
