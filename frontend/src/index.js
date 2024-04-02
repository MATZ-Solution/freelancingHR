/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import AppRouter from './frontend/approuter';
import '../src/custom.css'

// Use For Switch
// import 'react-toggle-switch/dist/css/switch.min.css';

// createRoot(document.getElementById('root')).render(<AppRouter />);

// if (module.hot) {
//   // enables hot module replacement if plugin is installed
//   module.hot.accept();
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppRouter/>
  </>
);
