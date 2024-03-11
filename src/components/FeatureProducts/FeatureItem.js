import React from "react";
import ProductCard from "../Products/ProductCard";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

function FeatureItem({ item }) {
  const { img, itemName, price } = item;
  console.log(item);

  return (
    // <Grid item lg={3} md={4} sm={6} xs={6}>
    //   <Card elevation={1}>
    //     <CardMedia component="img" image={img} src={img} />
    //     <CardContent sx={{ bgcolor: "transparent" }}>
    //       <Typography variant="h5" component="div">
    //         {itemName}
    //       </Typography>
    //       <Typography>Price: {price}</Typography>
    //     </CardContent>
    //     <Button sx={{ float: "right" }}>Add to Cart</Button>
    //     <Button>Quickview</Button>
    //   </Card>
    // </Grid>
    <ProductCard item={item} />
    // <div>hello</div>
  );
}

export default FeatureItem;
