import { Button } from "@chakra-ui/button";
import { VStack, Text, HStack } from "@chakra-ui/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { FaGoogle } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { FormikInput } from "../common/FormikInput";

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
    <VStack
      as="form"
      className="scene_element scene_element--clipmidup"
      onSubmit={formik.handleSubmit}
      spacing="15px"
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
        <Text fontWeight="600" textAlign="center" width="100%" color="black">
          Ingresa con Google
        </Text>
      </HStack>    
    </VStack>
  );
}

export { LoginScreen };
