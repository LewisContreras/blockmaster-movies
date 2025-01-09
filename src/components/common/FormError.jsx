import React from "react";
import { Box } from "@chakra-ui/react";

const FormError = ({ error, touched }) => {
  return error && touched ? <Box>{error}</Box> : null;
};

export { FormError };
