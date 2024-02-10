import  { Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/login-form/Login";
import Auth from "./pages/Auth";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/auth">Auth</Link>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/auth" element={< Auth  />} />
      </Routes>
    </Fragment>
  );
};

export default App;
