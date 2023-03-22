import { AppRouter } from './lib/Router/AppRouter';
import { routes } from './Routes';

export const App = () => {  
  return (
    <main>
      <AppRouter routes={routes} />
    </main>
  );
};
export default App;