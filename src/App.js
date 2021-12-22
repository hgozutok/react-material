import { ToggleTheme, theme } from "./components/theme/ToggleTheme";
import "./App.css";
import React, { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./components/theme/Theme";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { MainContext } from "./components/context/userContext";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import RouteTable from "./components/context/RouteTable";
function ThemeFunction({ children }) {
  const [toggleDark, setToggleDark] = useState(false);

  const [cart, addCart] = useState([]);

  const data = {
    toggleDark,
    setToggleDark,
    cart,
    addCart,
  };
  useEffect(() => {
    addCart(JSON.parse(localStorage.getItem("cart")));
    setToggleDark(JSON.parse(localStorage.getItem("theme")));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("theme", JSON.stringify(toggleDark));
  }, [cart, toggleDark]);
  return (
    <MainContext.Provider value={data}>
      <ThemeProvider theme={toggleDark ? darkTheme : lightTheme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </MainContext.Provider>
  );
}

function App() {
  // useEffect(() => {
  //   addCart(JSON.parse(window.localStorage.getItem('cart')));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('cart', cart);
  // }, [cart]);

  return (
    <React.Fragment>
      <ThemeFunction>
        {" "}
        <RouteTable />
      </ThemeFunction>
    </React.Fragment>
  );
}

export default App;
