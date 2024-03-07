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

function FeatureItem(props) {
  const { img, itemName, price } = props.props;
  console.log(img);
  return (
    <Grid item lg={3} md={4} sm={6} xs={6}>
      <Card>
        {/* <CardActionArea disableRipple> */}
        <CardMedia component="img" image={img} src={img} />
        <CardContent sx={{ bgcolor: "transparent" }}>
          <Typography variant="h5" component="div">
            {itemName}
          </Typography>
          <Typography>Price: {price}</Typography>
        </CardContent>
        <Button sx={{ float: "right" }}>Add to Cart</Button>
        {/* </CardActionArea> */}
      </Card>
    </Grid>
  );
}

export default FeatureItem;
