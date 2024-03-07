import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Box } from "@mui/material";

function HomePageCarousel({ items }) {
  //   var items = [
  //     {
  //       name: "Random Name #1",
  //       description: "Probably the most random thing you have ever seen!",
  //       img: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  //     },
  //     {
  //       name: "Random Name #2",
  //       description: "Hello World!",
  //       img: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
  //     },
  //   ];

  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          //   marginBottom: "10px",
          //   textAlign: "right", // 4
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      sx={{ position: "relative", zIndex: 1000, height: "100%" }}
      elevation={0}
    >
      {/* <img
        style={{ width: "100%", height: "500px" }}
        // style={{ backgroundSize: "cover" }}
        alt="test pic"
        src={props.item.img}
      /> */}
      <Box
        component="img"
        src={props.item.img}
        alt="test"
        sx={{ width: "100%", height: "500px" }}
      ></Box>

      <Button
        sx={{
          padding: 2,
          //   backgroundColor: "transparent ",
          opacity: 1,
          color: "white",
          ":hover": {
            backgroundColor: "grey", // theme.palette.primary.main
            color: "white",
          },
          position: "absolute",
          zIndex: 0,
          bottom: 0,
          right: 0,
          borderRadius: 0,
        }}
      >
        <Typography sx={{ width: "100%" }}>View Collection</Typography>
      </Button>
    </Paper>
  );
}

export { Item, HomePageCarousel };
