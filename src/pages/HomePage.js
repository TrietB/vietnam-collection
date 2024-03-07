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
import FeatureProductList from "../components/FeatureProducts/FeatureProductList";

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
      {/* <Grid container sx={{ maxWidth: "1200px", margin: "auto" }} spacing={3}>
        <Grid item lg={6}>
          <Box width="90%">
            Shipping cost: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla cursus fringilla metus. Nullam dapibus ante vitae ipsum
            consectetur porta. Nunc lacinia purus augue, id congue nulla
            dignissim at. In cursus leo nisi, a porta nunc sollicitudin
            pulvinar. Duis fringilla felis in est consequat euismod. Nam eu
            felis dui. Ut dui massa, euismod sed sodales vitae, euismod ut
            ipsum. Donec eu ex mauris. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Mauris accumsan leo non nunc sollicitudin, et
            ultricies nisl fringilla. Mauris sollicitudin ligula sed eros
            vulputate mattis vel ac nisl. Aenean a turpis augue. Maecenas eget
            dictum lacus. Proin quis leo est. Etiam mattis elementum ex sit amet
            euismod.
          </Box>
        </Grid>
        <Grid item lg={6}>
          <Box width="90%">
            Special service :Morbi rhoncus magna eu massa commodo iaculis.
            Suspendisse nunc velit, rutrum in finibus non, finibus eget ligula.
            Integer feugiat nulla quis est fringilla, sit amet tempus velit
            rutrum. Vestibulum dictum in ex vitae ornare. Maecenas blandit ipsum
            sit amet urna tristique ultricies. Fusce suscipit blandit lacus quis
            tempus. Aenean dignissim ultrices sapien vel accumsan. Praesent
            tempor velit ut lorem ultricies ullamcorper eget at massa. Duis
            tellus justo, suscipit vitae eleifend sed, finibus sit amet lorem.
            Vestibulum nisi mauris, volutpat ut iaculis eu, luctus ac metus.
            Aenean facilisis, sem ut gravida viverra, neque lectus placerat
            augue, vitae ornare libero erat eu lorem. Pellentesque euismod est
            libero, non interdum nibh lobortis sed. Etiam enim erat, dignissim
            non dolor pretium, aliquet bibendum enim.
          </Box>
        </Grid>
      </Grid> */}

      <FeatureProductList />
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
