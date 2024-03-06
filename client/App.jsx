import React, { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import FavoritePage from "./components/FavoritePage.jsx";
import SearchBar from "./components/SeachBar.jsx";
import LoginPage from "./components/LoginPage.jsx";
import "./styles.css";
// import ArticleCard from "./components/articleCard.js";
import ArticleContainer from "./components/articleContainer.js";

const NotFound = () => <h1>404 Page not found</h1>;

const Layout = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <ArticleContainer />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div id="AppContainer">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/news" element={<Layout />} />
      </Routes>
    </div>
  );
};

export default App;
