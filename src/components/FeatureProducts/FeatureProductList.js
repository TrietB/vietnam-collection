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
          return (
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <FeatureItem item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default FeatureProductList;
