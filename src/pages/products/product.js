import React, { useEffect, useState, useReducer } from "react";
import { backdropClasses, Card, Rating, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../services/productService";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import * as texts from "../../const/productConst";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import CartReducer from "../../components/recucers/cartReducer";
import SnackBarMenu from "../../components/layout/SnackBarMenu";
import { forwardRef, useRef, useImperativeHandle } from "react";

function Product() {
  const childWRef = useRef();
  const [state, dispatch] = useReducer(CartReducer); //cart actions
  const [product, setProduct] = useState({}); //active product

  const [loading, setLoading] = useState(false); //loading state
  const [cartItem, setCartItem] = useState(1); //cart item state
  const [rate, setRate] = useState(0); //rate state
  let { id } = useParams(); //get product id from url

  const [snackbar, setSnackbar] = useState({
    vertical: "top",
    horizontal: "right",
    message: "Product added to cart",
    actionTitle: "View Cart",
    pageUrl: "/cart",
  }); //snackbar message

  const openSnack = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: cartItem },
    });
    childWRef.current.handleClick(snackbar);
  };

  const fetchProducts = async () => {
    setLoading(true);
    getProductByID(id).then((res) => {
      //get product by id
      setProduct(res.data);
      setRate(res.data.rating.rate);
      // console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProducts(); //fetch product on component mount
  }, [product]);

  return (
    <>
      <SnackBarMenu ref={childWRef} />
      <Typography variant="h2">{texts.PRODUCT_DETAIL}</Typography>
      {loading ? (
        <div>{texts.LOADING}</div>
      ) : (
        <Paper>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={2} padding={5}>
                  <Card
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "200px",
                      height: "300px",
                      borderRadius: "5%",
                    }}
                  ></Card>
                  <Grid item xs={8}>
                    {/* <Card sx={{ padding:5, alignItems:"stretch",  alignContent:"stretch"}} > */}
                    <Typography variant="h4">{product.title}</Typography>
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        onClick={() =>
                          cartItem <= 1
                            ? setCartItem(1)
                            : setCartItem(cartItem - 1)
                        }
                      >
                        -
                      </Button>
                      <Button disabled>{cartItem}</Button>
                      <Button onClick={() => setCartItem(cartItem + 1)}>
                        +
                      </Button>
                    </ButtonGroup>

                    <Typography variant="h4">
                      {texts.CURRENCY_SYMBOL} {product.price}
                    </Typography>

                    <Button variant="contained" onClick={openSnack}>
                      {texts.ADD_TO_CART}
                    </Button>
                    <Typography variant="h4">{texts.RATING}</Typography>

                    <Rating
                      name="read-only"
                      value={product.rating ? product.rating.rate : 0}
                      precision={0.5}
                      readOnly
                    />
                  </Grid>{" "}
                </Grid>
              </Grid>{" "}
              <Grid item xs={4}></Grid>
              <Grid item xs={8}></Grid>
            </Grid>

            <Typography variant="h4">{texts.PRODUCT_DESCRIPTION}</Typography>
            <Typography variant="h6">{product.description}</Typography>

            <Typography variant="h6">{product.quantity}</Typography>
            <Typography variant="h6">{product.category}</Typography>
            {/*  <Typography variant="h6">{product.subCategory}</Typography>
            <Typography variant="h6">{product.brand}</Typography>
            <Typography variant="h6">{product.color}</Typography>
            <Typography variant="h6">{product.size}</Typography>
            <Typography variant="h6">{product.material}</Typography>  */}
          </div>
        </Paper>
      )}
    </>
  );
}

export default Product;
