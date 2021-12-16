import { React, useEffect, useState, useContext, useReducer } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as texts from "../../const/productConst";
import { RoundedCorner } from "@mui/icons-material";
import BasicModal from "../layout/basicModal";
import { forwardRef, useRef, useImperativeHandle } from "react";
import Link from "@mui/material/Link";

import { MainContext } from "../context/userContext";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import SnackBarMenu from "../layout/SnackBarMenu";

import CartReducer from "../../components/recucers/cartReducer";

function SingleProduct(product) {
  const { cart } = useContext(MainContext);
  const { addCart } = useContext(MainContext);
  const childRef = useRef();
  const childWRef = useRef();
  const productData = product.product;

  const [state, dispatch] = useReducer(CartReducer); //cart actions

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    vertical: "top",
    horizontal: "right",
    message: "Product added to cart",
    actionTitle: "View Cart",
    pageUrl: "/cart",
  }); //snackbar message

  const addToCart = () => {
    // localStorage.setItem("cart",[...cart,{
    //     productId:productData.id,quantity:1,
    // }]);
    var item = cart.find((item) => item.productId === productData.id);
    if (item) {
      item.quantity++;
    } else {
      addCart([
        ...cart,
        {
          productId: productData.id,
          productTitle: productData.title,
          productPrice: productData.price,
          productImage: productData.image,
          quantity: 1,
        },
      ]);
    }
    console.log(cart);
  };
  const openSnack = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...productData, quantity: 1 },
    });
    childWRef.current.handleClick(snackbar);
  };

  const openPopup = () => {
    childRef.current.handleOpen(
      "Share",
      "Share this product with following methods"
    );
  };

  const mouseMove = () => {
    setShow(true);
  };

  const mouseLeave = () => {
    setShow(false);
  };

  const setNav = (obj) => {
    window.location.reload(false);
    navigate(obj.path);
  };

  return (
    <Card
      key={productData.id}
      sx={{
        width: 350,
        height: 450,
        backgroundImage: `url(${productData.image})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        boxShadow: "1px 1px 4px 4px lightgray",
        justifyContent: "end",
        borderRadius: "5%",
        display: "flex",
        alignItems: "flex-end",
        flexWrap: "wrap",
        alignContent: "flex-end",
      }}
      onMouseEnter={mouseMove}
      onMouseLeave={mouseLeave}
    >
      <SnackBarMenu ref={childWRef} />
      <Card hidden={!show} sx={{ backgroundColor: "secondary", opacity: 0.9 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link href={`/products/product/${productData.id}`}>
              {productData.title}
            </Link>
            {/* <Button onClick={setNav} href={`/products/product/${productData.id}`}>{productData.title}</Button> */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productData.description.substring(0, 100)}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          backgroundColor: "primary",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          alignContent: "center",
          flexDirection: "column",
          flex: "1",
        }}
        hidden={!show}
      >
        <CardActions>
          <Button onClick={openPopup} size="small">
            {texts.SHARE}
          </Button>
          <Button variant="contained" size="small" onClick={openSnack}>
            {texts.ADD_TO_CART}
          </Button>
        </CardActions>
      </Card>
      <BasicModal key={productData.id} ref={childRef} />
    </Card>
  );
}

export default SingleProduct;
