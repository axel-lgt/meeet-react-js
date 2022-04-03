import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './styles/index.scss';
import Landing from './components/Landing/Landing';
import Menu from './components/Menu/Menu';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import EditProfile from './components/EditProfile/EditProfile';
import Email from './components/Settings/Email/Email';
import Password from './components/Settings/Password/Password';
import BlockedUsers from './components/Settings/BlockedUsers/BlockedUsers';


const App = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

  const updateMedia = () => {
      setDesktop(window.innerWidth > 1200);
  }

  useEffect(() => {
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
  })

  const location = useLocation();
  const isLandingPage = location.pathname === '/'

  return (
    <>
      {!isLandingPage && <Menu />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          {isDesktop &&
          <>
            <Route path="/home/profileinfo" element={<ProfileInfo />} />
            <Route path="/home/settings" element={<Settings />} />
            <Route path="/home/settings/editprofile" element={<EditProfile />} />
            <Route path="/home/settings/email" element={<Email />} />
            <Route path="/home/settings/password" element={<Password />} />
            <Route path="/home/settings/blocked" element={<BlockedUsers />} />
          </>
          }
        </Route>
        {!isDesktop &&
        <>
          <Route path="/profileinfo" element={<ProfileInfo />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="/settings/editprofile" element={<EditProfile />} />
            <Route path="/settings/email" element={<Email />} />
            <Route path="/settings/password" element={<Password />} />
            <Route path="/settings/blocked" element={<BlockedUsers />} />
          </Route>
        </>
        }
        <Route path="*" element={<Error />} />
      </Routes> 
    </>
  )
};

export default App;
