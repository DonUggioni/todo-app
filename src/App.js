import Layout from './layout/Layout';
import { Provider } from 'react-redux';
import { store } from './store/Store';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
