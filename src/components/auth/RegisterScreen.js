import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Center, Box, Text, VStack, Link } from "@chakra-ui/layout";
import React from "react";
import { useDispatch } from "react-redux";
import { Link as ReachLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import "../../styles/animations.css";
import { FormError } from "../FormError";

function RegisterScreen() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nombre requerido"),
      email: Yup.string().email("Email inválido").required("Email requerido"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("Contraseña requerida"),
      password2: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("Confirmar contraseña es requerido"),
    }),
    onSubmit: (values) => {
      const { name, email, password } = values;
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    },
  });

  return (
    <Center h="100vh">
      <Box
        w="350px"
        borderRadius="10px"
        padding="14px"
        bgColor="brand.primary"
        p="1px"
      >
        <form onSubmit={formik.handleSubmit}>
          <Center h="120px" borderRadius="10px 10px 0 0">
            <Img src="https://i.imgur.com/pwIYVhf.png" />
          </Center>
          <VStack
            h="340px"
            className="scene_element scene_element--clipmidup"
            spacing="10px"
            p="10px"
            borderRadius="0 0 10px 10px"
            bgColor="#14112e"
          >
            <Text fontSize="xl" fontWeight="600">
              Regístrate
            </Text>
            <Input
              type="text"
              borderColor="brand.primary"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormError error={formik.errors.name} />
            <Input
              type="email"
              borderColor="brand.primary"
              placeholder="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormError error={formik.errors.email} />
            <Input
              type="password"
              borderColor="brand.primary"
              placeholder="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormError error={formik.errors.password} />
            <Input
              type="password"
              borderColor="brand.primary"
              placeholder="Confirm Password"
              name="password2"
              value={formik.values.password2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormError error={formik.errors.password2} />
            <Button type="submit" bgColor="#3C5EEA">
              Entrar
            </Button>
            <Link to="/auth/login" as={ReachLink}>
              ¿Ya estás registrado?
            </Link>
          </VStack>
        </form>
      </Box>
    </Center>
  );
}

export { RegisterScreen };
