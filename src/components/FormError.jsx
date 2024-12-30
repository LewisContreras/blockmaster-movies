import React from "react";
import { Box } from "@chakra-ui/react";

const FormError = ({ error }) => {
  return error ? <Box>{error}</Box> : null;
};

export { FormError };
