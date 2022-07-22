import { Routes, Route, useLocation } from 'react-router-dom';
import Auth from './layout/Auth/Auth';
import Login from 'pages/Auth/Login/Login';
import SignUp from 'pages/Auth/SignUp/SignUp';

function App() {
  const location = useLocation();
  if (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/resetpassword' ||
    location.pathname === '/newpassword' ||
    location.pathname === '/updatepassword'
  ) {
    return (
      <Auth>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Auth>
    );
  }
}

export default App;
