import { RouterFacade } from './lib';
import { Home, Login } from './pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  // add more routes as needed
];

export const App = () => {
  return <RouterFacade routes={routes} />;
};
