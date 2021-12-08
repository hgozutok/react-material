import { React, useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ButtonGroup from "@mui/material/ButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function NewOrder() {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [products, setProducts] = useState([]);

  const initialState = {
    orderId: "",
    oname: "",
    date: "",
    total: "",
    productList: [],
  };

  const [order, setOrder] = useState(initialState);

  const handleOrderChange = (event) => {
    console.log(event.target.id);
    const { id, value } = event.target;
    setOrder({ ...order, [id]: value });
  };

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const handleChange = (e) => {
    console.log(e.target.name);
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
    console.log(order);
  };
  const selectedProductChange = async (e) => {
    setProduct(
      products.find((a) => {
        return a.id === e.target.value;
      })
    );
    console.log(e.target.value);
  };

  const addProduct = (e) => {
    /*    let prod =products.find((a)=>{
          
        return a.id===e.target.value;
        });
let allprod =products;
        //const { order } = this.state;
        allprod.push(prod);
    
   
        const newOuter = Object.assign({}, order, { products: allprod });
        */
    let aprod = order.productList;
    console.log(aprod);
    aprod.push(product);
    setOrder({
      ...order,
      productList: aprod,
      //[e.target.name]: e.target.value
    });
    console.log(order);
  };

  return (
    <div>
      <h1>New Order</h1>
      {JSON.stringify(order)}
      <form>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <TextField
              onChange={handleOrderChange}
              id="orderId"
              label="OrderID"
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              onChange={handleOrderChange}
              id="oname"
              label="Name"
              variant="outlined"
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              onChange={handleOrderChange}
              id="date"
              label="Date"
              variant="outlined"
            />
          </FormControl>
          <Box alignItems={"flex-end"}>
            <FormControl>
              <Select
                value={order.id}
                labelId="demo-simple-select-label"
                id="product"
                label="Age"
                onChange={selectedProductChange}
              >
                <MenuItem value={0}>Select</MenuItem>
                {products.map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.title}- ${product.price}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small">
              <Button variant="contained" onClick={addProduct}>
                Add
              </Button>
            </FormControl>
          </Box>
        </Box>
      </form>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Img</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Cat</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="left">Command</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.productList.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.image} alt="product" width="100" height="100" />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="right"> {row.price}</TableCell>

                <TableCell align="center">
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                  >
                    <Button>-</Button>
                    <Button disabled>{row.price}</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell align="right">{row.price * 2}</TableCell>

                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                {/*   <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* { id:'',
        title:'',
        price:'',
        category:'',
        description:'',
        image:''} */}

      {/*{order.productList.map((prd) => (
          <div>
            
              <FormControl size="small">
             <InputLabel key={prd.id} id={prd.id}>Title</InputLabel>
             <TextField key={prd.id} onChange={handleOrderChange} id={prd.id} value={prd.title} variant="outlined" />
           
           </FormControl>
      <FormControl size="small" >
      <Button key={prd.id} id={prd.id}  variant="contained" >Remove</Button>
      </FormControl> 
      </div>

        ))}*/}

      {/* <select className="form-control" id="product">
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.title}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default NewOrder;
