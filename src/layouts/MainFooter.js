import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import FTextField from "../components/form/FTextField";
import FormProvider from "../components/form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SendIcon from "@mui/icons-material/Send";

const NewsLetterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const defaultValues = {
  email: "",
  remember: true,
};

function MainFooter() {
  const methods = useForm({
    resolver: yupResolver(NewsLetterSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    let { email, name } = data;

    console.log(email, name);
  };
  return (
    <Container sx={{ bgcolor: "#004c4c" }} maxWidth={false}>
      <Grid container maxWidth={"100%"} spacing={4}>
        <Grid item sx={{ color: "white", mt: 2 }} md={6}>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            {/* <Stack
              spacing={3}
              sx={{
                "& .MuiTextField-root": { bgcolor: "white", borderRadius: 1 },
              }}
            > */}
            <Box
              sx={{
                "& .MuiTextField-root": { bgcolor: "white", borderRadius: 1 },
              }}
            >
              <Typography variant="h5">Subscribe for NewsLetter</Typography>
              <FTextField
                name={"email"}
                label={"Your Email"}
                variant={"filled"}
              />
              <Button
                startIcon={<SendIcon />}
                variant="contained"
                type="submit"
              >
                Send
              </Button>
            </Box>
            {/* </Stack> */}
          </FormProvider>
        </Grid>
        <Grid item sx={{ color: "white" }} md={6}>
          <ListItem>hello</ListItem>
          <ListItem>hello</ListItem>
          <ListItem>hello</ListItem>
          <ListItem>hello</ListItem>
        </Grid>
      </Grid>

      <Typography variant="body2" color="white" align="center" p={1}>
        {"Copyright © "}
        <Typography
          component={RouterLink}
          to={"/"}
          sx={{ textDecoration: "none" }}
          color="white"
        >
          Vietnam Collections
        </Typography>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

export default MainFooter;
