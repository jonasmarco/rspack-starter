import { Provider } from 'react-redux';

import Loading from '@components/loading';

import { store } from '@app/config/Redux';

function App() {
  return (
    <Provider store={store}>
      <Loading visible />
    </Provider>
  );
}

export default App;
