// **
// * @usedBy Library App
// *

import React from 'react';
import ReactDOM from 'react-dom/client';

import {App} from './main';

export function renderMyLib(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container)
    throw new Error(`Container com id "${containerId}" não encontrado.`);

  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}

export {App};
