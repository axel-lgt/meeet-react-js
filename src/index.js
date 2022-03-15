import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import App from './components/App/App';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);