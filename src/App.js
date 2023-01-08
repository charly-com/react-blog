import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Details from "./pages/details/Details";
// import Login from "./pages/login/Login";
import Account from "./pages/account/Account";


const App = () => {
  return (
    <>
      {" "}
      <Router>
        <Header/>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/details/:id" element={<Details/>} />
          <Route  path="/account" element={<Account/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
