import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const categories = [
  { name: "category 1 " },
  { name: "category 2" },
  { name: "category 3" },
];

function Products() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={0} md={3}>
          <Paper elevation={1} sx={{ padding: 5 }}>
            <List>
              {categories.map((category) => {
                return (
                  <ListItem sx={{ padding: 0 }}>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText primary={category.name} />
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          {/* <Box
            sx={{
              maxWidth: "1200px",
              padding: "0 24px 0 24px",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              ml: 5,
              mr: "auto",
              mt: 5,
              mb: 10,
            }}
          > */}
          <Paper sx={{ padding: 5 }}>
            <Typography>
              She looked at her student wondering if she could ever get through.
              "You need to learn to think for yourself," she wanted to tell him.
              "Your friends are holding you back and bringing you down." But she
              didn't because she knew his friends were all that he had and even
              if that meant a life of misery, he would never give them up. He
              dropped the ball. While most people would think that this was a
              metaphor of some type, in Joe's case it was absolutely literal. He
              had hopes of reaching the Major League and that dream was now it
              great jeopardy. All because he had dropped the ball. She needed
              glasses. It wasn't that she couldn't see without them, but what
              she could see with them. When she wore glasses, her eyes focused
              so deeply that she could see not only the physical but also
              beyond. It was like a superpower. But she needed glasses. She
              looked at her student wondering if she could ever get through.
              "You need to learn to think for yourself," she wanted to tell him.
              "Your friends are holding you back and bringing you down." But she
              didn't because she knew his friends were all that he had and even
              if that meant a life of misery, he would never give them up. He
              dropped the ball. While most people would think that this was a
              metaphor of some type, in Joe's case it was absolutely literal. He
              had hopes of reaching the Major League and that dream was now it
              great jeopardy. All because he had dropped the ball. She needed
              glasses. It wasn't that she couldn't see without them, but what
              she could see with them. When she wore glasses, her eyes focused
              so deeply that she could see not only the physical but also
              beyond. It was like a superpower. But she needed glasses. She
              looked at her student wondering if she could ever get through.
              "You need to learn to think for yourself," she wanted to tell him.
              "Your friends are holding you back and bringing you down." But she
              didn't because she knew his friends were all that he had and even
              if that meant a life of misery, he would never give them up. He
              dropped the ball. While most people would think that this was a
              metaphor of some type, in Joe's case it was absolutely literal. He
              had hopes of reaching the Major League and that dream was now it
              great jeopardy. All because he had dropped the ball. She needed
              glasses. It wasn't that she couldn't see without them, but what
              she could see with them. When she wore glasses, her eyes focused
              so deeply that she could see not only the physical but also
              beyond. It was like a superpower. But she needed glasses. She
              looked at her student wondering if she could ever get through.
              "You need to learn to think for yourself," she wanted to tell him.
              "Your friends are holding you back and bringing you down." But she
              didn't because she knew his friends were all that he had and even
              if that meant a life of misery, he would never give them up. He
              dropped the ball. While most people would think that this was a
              metaphor of some type, in Joe's case it was absolutely literal. He
              had hopes of reaching the Major League and that dream was now it
              great jeopardy. All because he had dropped the ball. She needed
              glasses. It wasn't that she couldn't see without them, but what
              she could see with them. When she wore glasses, her eyes focused
              so deeply that she could see not only the physical but also
              beyond. It was like a superpower. But she needed glasses. She
              looked at her student wondering if she could ever get through.
              "You need to learn to think for yourself," she wanted to tell him.
              "Your friends are holding you back and bringing you down." But she
              didn't because she knew his friends were all that he had and even
              if that meant a life of misery, he would never give them up. He
              dropped the ball. While most people would think that this was a
              metaphor of some type, in Joe's case it was absolutely literal. He
              had hopes of reaching the Major League and that dream was now it
              great jeopardy. All because he had dropped the ball. She needed
              glasses. It wasn't that she couldn't see without them, but what
              she could see with them. When she wore glasses, her eyes focused
              so deeply that she could see not only the physical but also
              beyond. It was like a superpower. But she needed glasses.
            </Typography>
          </Paper>
          {/* </Box> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Products;
