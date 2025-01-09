import { Button } from "@chakra-ui/button";
import { Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import "../../styles/animations.css";
import { FormikInput } from "../common/FormikInput";

function RegisterScreen({setLogin}) {
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
        <VStack
          as="form"
          onSubmit={formik.handleSubmit}
          className="scene_element scene_element--clipmidup"
          spacing="10px"
        >
          <Text fontSize="xl" fontWeight="600">
            Regístrate
          </Text>
          <FormikInput name="name" type="text" placeholder="Name" formik={formik} />
          <FormikInput name="email" type="email" placeholder="Email" formik={formik} />
          <FormikInput name="password" type="password" placeholder="Password" formik={formik} />
          <FormikInput name="password2" type="password" placeholder="Confirm Password" formik={formik} />
          <Button type="submit" bgColor="#3C5EEA">
            Entrar
          </Button>
          <Button variant="link" onClick={() => setLogin(true)} >
            ¿Ya estás registrado?
          </Button>
        </VStack>
  );
}

export { RegisterScreen };
