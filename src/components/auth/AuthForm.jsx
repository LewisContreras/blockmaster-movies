import React, { useState } from "react";
import { LogoBlockmaster } from "../common/LogoBlockmaster";
import { Center, Box, Button } from "@chakra-ui/react";
import { LoginScreen } from "./LoginScreen";
import { RegisterScreen } from "./RegisterScreen";

const AuthForm = () => {
  const [login, setLogin] = useState(true);
  return (
    <Center h="100vh">
      <Box borderRadius="10px" p="1px" w="350px" bgColor="brand.primary">
        <Center h="120px" borderRadius="10px 10px 0 0">
          <LogoBlockmaster />
        </Center>
        <Box
          className="scene_element scene_element--clipmidup"
          p="10px"
          minH="320px"
          borderRadius="0 0 10px 10px"
          spacing="15px"
          bgColor="#14112e"
        >
          {login ? (
            <LoginScreen />
          ) : (
            <RegisterScreen  />
          )}
          <Button _focus={{border: "none"}} mt="10px" w="100%" variant="link" onClick={() => setLogin(!login)}>
            {login ? "¿Ya estás registrado?" : "¿No estás registrado?"}
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export { AuthForm };
