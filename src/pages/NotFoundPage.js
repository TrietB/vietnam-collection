import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

function NotFoundPage() {
  return (
    <>
      <Typography>Page not found</Typography>
      <Button component={RouterLink} to={"/"}>
        Return to home
      </Button>
    </>
  );
}

export default NotFoundPage;
