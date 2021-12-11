import React from "react";
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
import Link from '@mui/material/Link';

function SingleProduct(product) {
  const productData = product.product;
  const childRef = useRef();

  const [show, setShow] = React.useState(false);
  // const {handleOpen,open, setOpen}=BasicModal();

  const openPopup = () => {
    //    console.log(handleOpen);
    //    console.log(open);
    //    let tmp = open;
    //    console.log(tmp);
    //   setShow(true);
    //setOpen(true);

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
  return (
    <Card
      sx={{
        width: 350,
        height: 450,
        backgroundImage: `url(${productData.image})`,
        backgroundSize: "100% 100%" /* <------ */,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
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
      {/* <Card sx={{ maxWidth: 325 ,maxHeight :350 }}>
        <CardMedia
          component="img"
        
          image={productData.image}
          alt="product"
        /> 
        </Card> */}
      <Card hidden={!show} sx={{ backgroundColor: "secondary", opacity: 0.6 }}>
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
          <Link href={`products/product/${productData.id}`}>{productData.title}</Link>
 
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
          <Button variant="contained" size="small">
            {texts.ADD_TO_CART}
          </Button>
        </CardActions>
      </Card>
      <BasicModal title="twitle" ref={childRef} />
    </Card>
  );
}

export default SingleProduct;
