import { React, useEffect, useState, useContext } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { MainContext } from "../context/userContext";
import IconButton from "@mui/material/IconButton";

function CartItems() {
  const { cart } = useContext(MainContext);
  const { addCart } = useContext(MainContext);

  const navPage = () => {
    window.location.href = "/cart";
  };

  return (
    <>
      <IconButton
        onClick={navPage}
        color="primary"
        aria-label="add to shopping cart"
      >
        <Badge
          style={{ mouseOver: true }}
          badgeContent={cart ? cart.length : 0}
          color="secondary"
        >
          {" "}
          <ShoppingCartRoundedIcon color="action" />
        </Badge>
      </IconButton>
    </>
  );
}

export default CartItems;
