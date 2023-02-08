import './main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ColorsProvider } from './ColorsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </React.StrictMode>
);
