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
    let { email } = data;

    console.log(email);
  };
  return (
    <Container sx={{ bgcolor: "#004c4c" }} maxWidth={false}>
      <Grid container maxWidth={"100%"} spacing={3}>
        <Grid item sx={{ color: "white", mt: 2 }} md={6} xs={12}>
          {/* <Stack
              spacing={5}
              sx={{
                "& .MuiTextField-root": { bgcolor: "white", borderRadius: 1 },
              }}
            > */}
          <Box
            sx={{
              "& .MuiTextField-root": { bgcolor: "white", borderRadius: 1 },
              "& .MuiFormHelperText-root": {
                position: "absolute",
                bottom: "-20px",
                left: 0,
                bgcolor: "white",
              },
            }}
          >
            <Typography sx={{ mb: 2 }} variant="h5">
              Subscribe for Newsletter
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <FTextField
                name={"email"}
                label={"Your Email"}
                variant={"filled"}
                fullWidth={false}
              />
              <Button
                startIcon={<SendIcon />}
                variant="contained"
                type="submit"
                sx={{ ml: 2, minHeight: "56px" }}
              >
                Send
              </Button>
            </FormProvider>
          </Box>
          {/* </Stack> */}
        </Grid>
        <Grid item sx={{ color: "white", mt: 2 }} md={3}>
          <ListItem>hello</ListItem>
          <ListItem>hello</ListItem>
          <ListItem>hello</ListItem>
          <ListItem>hello</ListItem>
        </Grid>
        <Grid item sx={{ color: "white", mt: 2 }} md={3}>
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
