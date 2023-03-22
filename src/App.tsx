import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/Counter';

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Team Cypher</h1>
        <Counter />
      </main>
    </Provider>
  );
}

 export default App;

