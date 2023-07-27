import React from 'react';
import { BrowserRouter ,  Route ,Routes } from 'react-router-dom' ;
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Log from './Login/Login';
import Sig from './Login/Signup';
import { Provider } from 'react-redux';
import store from './components/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Log/>}/>
        <Route path="/home" element={<App/>}/>
        <Route path="/signup" element={<Sig/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
