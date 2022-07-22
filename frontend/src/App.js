import Header from "components/Header/Header";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "pages/Home/Home";
import Auth from "./layout/Auth/Auth";
import Login from "pages/Auth/Login/Login";
import UploadSuccess from "pages/PostaHouse/uploadSuccess/uploadSuccess";
import SignUp from "pages/Auth/SignUp/SignUp";
import ResetPassword from "pages/Auth/ResetPassword/ResetPassword";

function App() {
  if (
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/resetpassword" ||
    location.pathname === "/newpassword" ||
    location.pathname === "/updatepassword"
  ) {
    return (
      <Auth>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </Auth>
    );
  }
}

export default App;
