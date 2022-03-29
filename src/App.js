import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/index.scss';
import Landing from './components/Landing/Landing';
import Menu from './components/Menu/Menu';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import EditProfile from './components/EditProfile/EditProfile';


const App = () => {

  const location = useLocation();
  const isLandingPage = location.pathname === '/'

  return (
    <>
      {!isLandingPage && <Menu />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profileinfo" element={<ProfileInfo />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="*" element={<Error />} />
      </Routes> 
    </>
  )
};

export default App;
