import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextProvider from './context/AppContext';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        {/* <ToastContainer> */}
            <App />
        {/* </ToastContainer> */}
    </AppContextProvider>

);
