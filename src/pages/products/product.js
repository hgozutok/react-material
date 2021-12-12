import { backdropClasses, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../services/productService";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as texts from "../../const/productConst";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function Product() {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
 setLoading(true);
    getProductByID(id).then((res) => {
      setProduct(res.data);
      console.log(res.data);
       setLoading(false);
    });
  }

  useEffect(() => {
    fetchProducts();
    
   
  }, []);

  return (
    <>
      <Typography variant="h2">{texts.PRODUCT_DETAIL}</Typography>
      {loading ? (
        <div>{texts.LOADING}</div>
      ) : (
        <div>


<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card 
          sx={{
            width: 350,
            height: 450,
            backgroundImage: `url(${product.image})`,
            backgroundSize: "75% 75%" /* <------ */,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            justifyContent: "end",
            borderRadius: "5%",
            display: "flex",
            alignItems: "flex-end",
            flexWrap: "wrap",
            alignContent: "flex-end",
        }}>
          
            
          </Card> 
        </Grid>
        <Grid item xs={8}>
         <Typography variant="h4">{product.title}</Typography>
         <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button>-</Button>
                    <Button disabled>{1}</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                
          <Typography variant="h4">{texts.CURRENCY_SYMBOL} {product.price}</Typography>  
          
          <Button variant="contained" >{texts.ADD_TO_CART}</Button>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>
    </Box>


    
    <Typography  variant="h4">{texts.PRODUCT_DESCRIPTION}</Typography>
          <Typography variant="h6">{product.description}</Typography>
   
          <Typography variant="h6">{product.quantity}</Typography>
          <Typography variant="h6">{product.category}</Typography>
          {/*  <Typography variant="h6">{product.subCategory}</Typography>
            <Typography variant="h6">{product.brand}</Typography>
            <Typography variant="h6">{product.color}</Typography>
            <Typography variant="h6">{product.size}</Typography>
            <Typography variant="h6">{product.material}</Typography>  */}
        </div>
      )}
    </>
  );
}

export default Product;
