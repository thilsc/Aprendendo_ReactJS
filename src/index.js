import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function MeuComponente() {
  return React.createElement('h1', null, 'Aprendendo REACT');
}

root.render(React.createElement(MeuComponente), document.getElementById('app'));

/*
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/
