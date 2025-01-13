import { Provider } from 'react-redux';

import HomeView from '@views/home';

import { store } from '@app/config/Redux';

function App() {
  return (
    <Provider store={store}>
      <HomeView />
    </Provider>
  );
}

export default App;
