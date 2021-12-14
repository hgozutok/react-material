import { React, useEffect, useState, useContext, useReducer } from "react";
import { Typography } from "@mui/material";
import { MainContext } from "../components/context/userContext";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as texts from "../const/productConst";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CartReducer from "../components/recucers/cartReducer";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from '@mui/material/Link';

function CartPage() {
  const { cart } = useContext(MainContext);
  const { addCart } = useContext(MainContext);
  const [state, dispatch] = useReducer(CartReducer);

  var subTotal = cart.reduce((acc, cur) => {
    return acc + cur.productPrice * cur.quantity;
  }, 0);
  useEffect(() => {
    //  dispatch({ type: "SET_CART", payload: cart });
  }, [cart]);

  const removeAll = () => {
    dispatch({ type: "reset" });
    addCart([]);
  };

  return (
    <div>
      <Typography variant="h4">Cart Page</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((row, index) => (
              <TableRow
                key={row.index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={row.productImage}
                    alt={row.productTitle}
                    width={50}
                    height={75}
                  />
                </TableCell>
                <TableCell align="left">
                <Link href={`/products/product/${row.productId}`}>{row.productTitle}</Link>
         
         </TableCell>
                <TableCell align="right">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button
                      onClick={() =>
                        dispatch({ type: "decrement", payload: row })
                      }
                    >
                      -
                    </Button>
                    <Button disabled>{row.quantity}</Button>
                    <Button
                      onClick={() =>
                        dispatch({ type: "increment", payload: row })
                      }
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell align="right">{row.productPrice}</TableCell>
                <TableCell align="right">
                  {row.quantity * row.productPrice}
                </TableCell>
              </TableRow>
            ))}
            <TableRow align="right">
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Typography variant="h5">Sub Total:</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5">{texts.CURRENCY_SYMBOL} {subTotal}</Typography>
              </TableCell>
            </TableRow>
            <TableRow align="right">
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>

              <TableCell align="right">
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button variant="contained" color="primary">
                    Checkout
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={removeAll}
                  >
                    Remove All
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CartPage;
