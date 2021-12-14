import { React, useEffect, useState, useContext } from "react";
import { Typography } from "@mui/material";
import SingleProduct from "../../components/products/SingleProduct";
import productService from "../../services/productService";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as texts from "../../const/productConst";

function Index() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);

    const data = await productService.getProducts();
    setProducts(data);
    //console.log(products[4].id);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Typography variant="h2">{texts.PRODUCTS}</Typography>

      {loading ? (
        <div>{texts.LOADING}</div>
      ) : (
        <>
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, backgroundColor: "secondary" }}>
                <Grid container>
                  {products.map((product, index) => (
                  
                    <Grid key={index} item padding={5}>
                      <SingleProduct key={product.id} product={product} />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default Index;
