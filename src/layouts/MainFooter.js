import {
  Box,
  Container,
  IconButton,
  Input,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
// import FTextField from "../components/form/FTextField";
// import FormProvider from "../components/form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import EmailIcon from "@mui/icons-material/Email";

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
  };
  return (
    <Container>
      <Box>
        <Typography variant="h4">Subscribe for newsletter</Typography>
        <TextField
          id="outlined-basic"
          label="Your Email"
          variant="outlined"
        ></TextField>
        <IconButton size="large">
          <EmailIcon size="large" />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center" p={1}>
        {"Copyright © "}
        <Typography
          component={RouterLink}
          to={"/"}
          sx={{ textDecoration: "none", color: "black" }}
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
