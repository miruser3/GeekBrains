import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <ThemeProvider theme={theme}> <App /></ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
  
);

