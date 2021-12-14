import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import NewOrder from "../../components/orders/NewOrder";
import Products from "../../pages/products/";
import Product from "../../pages/products/product";
import Layout from "../../components/layout/Layout";
import Login from "../../pages/Login";
import CartPage from "../../pages/CartPage";

function RouteTable() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            {" "}
            <Home />{" "}
          </Layout>
        }
      ></Route>
      <Route
        path="/order/new"
        element={
          <Layout>
            {" "}
            <NewOrder />{" "}
          </Layout>
        }
      ></Route>
      <Route
        path="/products/all"
        element={
          <Layout>
            {" "}
            <Products />{" "}
          </Layout>
        }
      ></Route>
      {/* <Route
        path="/products/"
        element={
          <Layout>
            {" "}
            <Products />{" "}
          </Layout>
        }
      ></Route> */}
      <Route
        path="/products/product/:id/"
        element={
          <Layout>
            {" "}
            <Product />{" "}
          </Layout>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <Layout>
            {" "}
            <Login />{" "}
          </Layout>
        }
      ></Route>
       <Route
        path="/cart"
        element={
          <Layout>
            {" "}
            <CartPage />{" "}
          </Layout>
        }
      ></Route>
      <Route
        path="/form"
        element={
          <Layout>
            {" "}
            <Form />{" "}
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default RouteTable;
