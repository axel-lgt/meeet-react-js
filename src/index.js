import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import App from './components/App/App';
import Menu from './components/Menu/Menu';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profileinfo" element={<ProfileInfo />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);