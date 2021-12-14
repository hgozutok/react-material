import React, { useEffect, useState ,useReducer} from "react";
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

function Product() {
  const [state, dispatch] = useReducer(CartReducer);
  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(false);
  const [cartItem, setCartItem] = useState(1);
  const [rate, setRate] = useState(0);
  let { id } = useParams();

  const fetchProducts = async () => {
    setLoading(true);
    getProductByID(id).then((res) => {
      setProduct(res.data);
      setRate(res.data.rating.rate);
     // console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
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
                  {/*  <img
                  src={product.image}
                  width={200}
                  height={300}
                  
                  borderRadius={'50%'}
                  backgroundSize={"75% 75%"}
                  alt="product"
                />
                width: 350,
             height: 450,
            backgroundImage: `url(${product.image})`,
            backgroundSize: "75% 75%" ,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            justifyContent: "end",
            borderRadius: "5%",
             display: "flex",
             alignItems: "flex-end",
             flexWrap: "wrap",
             alignContent: "flex-end", */}
                  <Grid item xs={8}>
                    {/* <Card sx={{ padding:5, alignItems:"stretch",  alignContent:"stretch"}} > */}
                    <Typography variant="h4">{product.title}</Typography>
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button onClick={() => setCartItem(cartItem - 1)}>
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

                    <Button variant="contained"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: {...product,quantity:cartItem} })
                    }
                    >{texts.ADD_TO_CART}</Button>
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
