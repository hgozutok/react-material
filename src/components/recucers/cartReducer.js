import { React, useEffect, useState, useContext } from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { MainContext } from "../context/userContext";

const initialState = { count: 0, lover: "Spring&Hugo" };

function init(initialCount) {
  return initialState;
}
function CartItems() {
  const { cart } = useContext(MainContext);
  const { addCart } = useContext(MainContext);
  return cart, addCart;
}

function CartReducer(state, action) {
  switch (action.type) {
    case "increment": {
      var cart = JSON.parse(localStorage.getItem("cart"));
      var item = cart.find(
        (item) => item.productId === action.payload.productId
      );

      if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        return (action.payload.quantity += 1);
      }
      break;
    }

    case "decrement": {
      var cart = JSON.parse(localStorage.getItem("cart"));
      var item = cart.find(
        (item) => item.productId === action.payload.productId
      );

      if (item) {
        action.payload.quantity <= 1
          ? (item.quantity = 1)
          : (item.quantity -= 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        return action.payload.quantity <= 1
          ? (action.payload.quantity = 1)
          : (action.payload.quantity -= 1);
      }
      break;
    }
    case "ADD_TO_CART": {
      var cart = JSON.parse(localStorage.getItem("cart"));
      // console.log(action.payload);
      var item = cart.find((itm) => itm.productId === action.payload.id);
      //  console.log(item);
      if (item) {
        item.quantity++;

        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        // item.productId=action.payload.id;
        // item.productTitle=action.payload.title;
        // item.productPrice=action.payload.price;
        // item.productImage=action.payload.image;
        // item.quantity=1;
        cart.push({
          productId: action.payload.id,
          productTitle: action.payload.title,
          productPrice: action.payload.price,
          productImage: action.payload.image,
          quantity: action.payload.quantity,
        });
        // console.log(JSON.stringify(cart))
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      break;
    }
    case "REMOVE_FROM_CART": {
      var cart = JSON.parse(localStorage.getItem("cart"));
      var item = cart.find(
        (item) => item.productId === action.payload.productId
      );

      if (item) {
        cart.splice(cart.indexOf(item), 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
      }
      break;
    }
    case "REFRESH": {
      var cart = JSON.parse(localStorage.getItem("cart"));

      return cart;
      break;
    }

    case "reset": {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    }

    default:
      throw new Error();
  }
}

export default CartReducer;
