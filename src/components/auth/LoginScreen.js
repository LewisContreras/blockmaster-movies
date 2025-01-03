import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { VStack, Text, Center, Box, Link, HStack } from "@chakra-ui/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { FaGoogle } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { FormikInput } from "../FormikInput";

function LoginScreen() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debe ser un correo válido")
        .required("El correo es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(startLoginEmailPassword(email, password));
    },
  });

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <Center h="100vh">
      <Box borderRadius="10px" p="1px" w="350px" bgColor="brand.primary">
        <Center h="120px" borderRadius="10px 10px 0 0">
          <Img src="https://i.imgur.com/pwIYVhf.png" alt="Logo de Blockmaster" />
        </Center>
          <VStack
          as="form"
            onSubmit={formik.handleSubmit}
            className="scene_element scene_element--clipmidup"
            p="10px"
            h="340px"
            borderRadius="0 0 10px 10px"
            spacing="15px"
            bgColor="#14112e"
          >
            <Text my="10px" fontWeight="600" fontSize="xl">
              Ingresa con correo y contraseña
            </Text>
            <FormikInput
              name="email"
              type="email"
              placeholder="Email"
              formik={formik}
            />
            <FormikInput
              name="password"
              type="password"
              placeholder="Password"
              formik={formik}
            />
            <Button
              disabled={loading}
              type="submit"
              bgColor="#3C5EEA"
              isLoading={loading}
            >
              Entrar
            </Button>
              <HStack
                onClick={handleGoogleLogin}
                cursor="pointer"
                px="6px"
                borderRadius="10px"
                bgColor="white"
                h="40px"
                width="100%"
              >
                <Icon as={FaGoogle} fontSize="20px" color="#3C5EEA" />
                <Text
                  fontWeight="600"
                  textAlign="center"
                  width="100%"
                  color="black"
                >
                  Ingresa con Google
                </Text>
              </HStack>
              <Link to="/auth/register" as={ReachLink}>
                ¿No estás registrado?
              </Link>
          </VStack>
      </Box>
    </Center>
  );
}

export default LoginScreen;
