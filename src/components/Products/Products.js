import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
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
];
const categories = [
  { name: "category 1" },
  { name: "category 2" },
  { name: "category 3" },
];

const ResponsiveList = styled(List)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    color: "red",
    // display: "flex",
    // flexDirection: "row",
    margin: "auto",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "600px",
    width: "100%",
    color: "blue",
    // flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    color: "pink",
    width: "100%",
    maxWidth: "900px",
    // flexDirection: "column",
  },
}));

function Products() {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={4} mb={3}>
        <Grid item xs={12} md={3}>
          <Paper elevation={1} sx={{ padding: 5 }}>
            <ResponsiveList>
              {categories.map((category) => {
                return (
                  <ListItem sx={{ padding: 0 }} key={category.name}>
                    <ListItemText primary={category.name} />
                  </ListItem>
                );
              })}
            </ResponsiveList>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            // columnSpacing={2}
            // rowSpacing={2}
          >
            {collections.map((item) => {
              console.log(item);
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <ProductCard item={item}></ProductCard>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Products;
