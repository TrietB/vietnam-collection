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
      <Grid
        container
        maxWidth={"100%"}
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid item sx={{ color: "white", mt: 2 }} md={6} xs={12}>
          <Box
            sx={{
              "& .MuiTextField-root": { bgcolor: "white", borderRadius: 0 },
              "& .MuiFormHelperText-root": {
                position: "absolute",
                bottom: "-20px",
                left: 0,
                bgcolor: "white",
                border: 0,
              },
            }}
          >
            <Typography sx={{ mb: 2, mt: 3 }} variant="h5">
              Subscribe for Newsletter
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <FTextField
                name={"email"}
                label={"Your Email"}
                variant={"filled"}
                // fullWidth={false}
                sx={{ maxWidth: "calc(100% - 200px)" }}
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
        </Grid>
        <Grid item sx={{ color: "white", mt: 2, mb: 3 }} md={3}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
        </Grid>
        <Grid item sx={{ color: "white", mt: 2, mb: 3 }} md={3}>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
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
