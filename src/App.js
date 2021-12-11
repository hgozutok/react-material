import { ToggleTheme, theme } from "./components/theme/ToggleTheme";
import "./App.css";
import React, { useState } from "react";
import { darkTheme, lightTheme } from "./components/theme/Theme";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { MainContext } from "./components/context/userContext";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import NewOrder from "./components/orders/NewOrder";
import  Products from "./pages/products/";

function App() {
  const [toggleDark, setToggleDark] = useState(false);

  const data = {
    toggleDark,
    setToggleDark,
  };

  return (
    <React.Fragment>
      <MainContext.Provider value={data}>
        <ThemeProvider theme={toggleDark ? darkTheme : lightTheme}>
          <CssBaseline />
          <Routes>
        <Route exact path="/" element={ <Layout>  <Home/>    </Layout>} >
        
        </Route>
        <Route  path="/order/new" element={ <Layout>  <NewOrder/>    </Layout>} >
        
        </Route>
        <Route  path="/products/all" element={ <Layout>  <Products/>    </Layout>} >
        
        </Route>
        <Route path="/login" element={<Layout>  <Login/>   </Layout> } >
        
        </Route>
        <Route path="/form" element={ <Layout>  <Form/>    </Layout>} >
        
        </Route>
        </Routes>
    
        </ThemeProvider>
      </MainContext.Provider>
    </React.Fragment>
  );
}

export default App;
