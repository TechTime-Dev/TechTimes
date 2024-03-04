import React, { useEffect } from "react";
import { Routes, Outlet } from "react-router-dom";
import "./styles.css";

const NotFound = () => <h1>404 Page not found</h1>;

const App = () => {
  return (
    <div id="AppContainer">
      <Routes></Routes>
      <h1>Welcome to Tech Times!</h1>
    </div>
  );
};

export default App;
