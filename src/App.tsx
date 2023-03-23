import React from 'react';
import { AppRouter } from './lib/Router/AppRouter';
import { routes } from './Routes';

export function App() {
  return (
    <main>
      <AppRouter routes={routes} />
    </main>
  );
}
export default App;
