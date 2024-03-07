import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React from "react";

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    // color: "red",
    // display: "flex",
    // flexDirection: "row",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "600px",
    width: "100%",
    // color: "blue",
    // flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    // color: "pink",
    width: "100%",
    maxWidth: "760px",
    // flexDirection: "column",
  },
}));

console.log(ResponsiveGrid);

function ProductCard(props) {
  const { img, itemName, price } = props.props;
  console.log(price);
  // console.log(props.img, props.itemName, props.itemPrice);
  return (
    <ResponsiveGrid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: "100%", margin: "auto" }}>
        {/* <CardActionArea disableRipple> */}
        <CardMedia component="img" height="200" width="500px" image={img} />
        <CardContent sx={{ bgcolor: "transparent" }}>
          <Typography variant="h5" component="div">
            {itemName}
          </Typography>
          <Typography>Price: {price}</Typography>
        </CardContent>
        <Button sx={{ float: "right" }}>Add to Cart</Button>
        {/* </CardActionArea> */}
      </Card>
    </ResponsiveGrid>
  );
}

export default ProductCard;
