import '@stylesheets/App.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Routes from '@config/Routes';

import { WindowSize } from '@features/layout/Types';

import {
  changeScrollTop,
  changeWindowSize,
} from '@features/layout';

import { store } from '@app/config/Redux';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

window.addEventListener('scroll', () => {
  store.dispatch(changeScrollTop(window.scrollY));
});

window.addEventListener('resize', () => {
  const windowSize: WindowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  store.dispatch(changeWindowSize(windowSize));
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
