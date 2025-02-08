import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import {Provider} from "react-redux";
import { store } from './State/Store.js';
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Provider store={store}>
    <App />

    </Provider>
    
    </HashRouter>
      
   
  </StrictMode>
);
