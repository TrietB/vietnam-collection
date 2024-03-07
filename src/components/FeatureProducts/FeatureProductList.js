import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FeatureItem from "./FeatureItem";
import testImage from "../../images/test/yellow_cup_shell.jpeg";

const collections = [
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
  { img: testImage, itemName: "Yellow Shell", price: "$100" },
];

function FeatureProductList() {
  return (
    <Container>
      <Typography variant="h3" width={"100%"}>
        FeatureProduct
      </Typography>
      <Grid container spacing={3}>
        {collections.map((item) => {
          return <FeatureItem props={item} />;
        })}
      </Grid>
    </Container>
  );
}

export default FeatureProductList;
