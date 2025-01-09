import React from "react";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { mapErrorMessage } from "../../helpers/mapErrorMessage";

const ErrorMessage = () => {
  const { msgError } = useSelector((state) => state.ui);
  return !!msgError ? (
    <Text textAlign="center" width="100%" color="red.400">
      {mapErrorMessage(msgError)}
    </Text>
  ) : null;
};

export { ErrorMessage };
