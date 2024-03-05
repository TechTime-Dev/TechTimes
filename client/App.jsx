import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import FavoritePage from "./components/FavoritePage.jsx";
import "./styles.css";
import ArticleCard from "./components/articleCard";

const NotFound = () => <h1>404 Page not found</h1>;

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div id="AppContainer">
<<<<<<< HEAD
      <Routes></Routes>
      <h1>Welcome to Tech Times!</h1>
      <ArticleCard />
=======
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/favorite" element={<FavoritePage />} />
        </Route>
      </Routes>
>>>>>>> master
    </div>
  );
};

export default App;
