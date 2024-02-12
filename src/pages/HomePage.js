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
import { HomePageCarousel } from "../components/Carousel";

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    img: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
    img: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
  },
  {
    name: "Random Name #3",
    description: "TrietBui",
    img: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
  },
];

function HomePage() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HomePageCarousel items={items} />
      <Box
        sx={{
          flexGrow: 1,
          margin: "0 auto",
          maxWidth: "1200px",
          padding: "0 24px 0 24px",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          ml: "auto",
          mr: "auto",
          mt: 5,
          mb: 10,
        }}
      ></Box>
    </Container>
  );
}

export default HomePage;
