import { React, useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function NewOrder() {

    const [product,setProduct] = useState(
       { id:'',
        title:'',
        price:'',
        category:'',
        description:'',
        image:''}
        );
    

        
    const [products, setProducts] = useState([]);
        
        
        
        
    const initialState = {
        
        orderId: "",
        oname: "",
        date: "",
        total: "",
        productList: []

    };
    
    
    
    
    const [order, setOrder] = useState(initialState);
    
    
 
 
 
 
     const handleOrderChange = (event) => {
         console.log(event.target.id);
         const { id, value } = event.target;
         setOrder({ ...order, [id]: value });
     };


     useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
        });
    }, []);


  const  handleChange = (e) => {
    console.log(e.target.name);
   setOrder({
    ...order,
    [e.target.name]: e.target.value
    });
    console.log(order);


    };
    const  selectedProductChange =async (e) => {

        setProduct(products.find((a)=>{
          
              return a.id===e.target.value;
         }));
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
       let aprod=order.productList;
       console.log(aprod);
       setOrder({
            ...order,productList:[{...order.productList,product
            //[e.target.name]: e.target.value
            }]
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
        <InputLabel id="orderId">OrderID</InputLabel>
        <TextField onChange={handleOrderChange} id="orderId" label="OrderID" variant="outlined" />

      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="oname">Name</InputLabel>
        <TextField onChange={handleOrderChange} id="oname" label="Name" variant="outlined" />

      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="date">Date</InputLabel>
        <TextField onChange={handleOrderChange} id="date" label="Date" variant="outlined" />
      
      </FormControl>
     <Box  alignItems={"flex-end"}>
      <FormControl >
        <InputLabel id="product">Product</InputLabel>
        <Select
        value={order.id}
        labelId="demo-simple-select-label" id="product" 
        label="Age" onChange={selectedProductChange}>
            <MenuItem value={0}>Select</MenuItem>
            {products.map((product) => (
                 <MenuItem key={product.id} value={product.id}>
                     {product.title}- ${product.price}
                     </MenuItem>


        ))}
  
  
      </Select>
      </FormControl>
      
      <FormControl sx={3}>
      <Button  variant="contained" onClick={addProduct}>Add</Button>
      </FormControl>
         </Box>
    </Box>
</form>
      {order.productList.map((product) => (
          <div key={product.id}>
                {product.title}
            </div>
        ))}

   






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
