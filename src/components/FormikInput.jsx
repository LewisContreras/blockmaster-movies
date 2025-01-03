import React from "react";
import { Input } from "@chakra-ui/input";
import { FormError } from "./FormError";

const FormikInput = ({ name, type, placeholder, formik }) => {
  return (
    <>
      <Input
        type={type}
        borderColor="brand.primary"
        placeholder={placeholder}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        isInvalid={
          formik.touched[name] && !!formik.errors[name]
        }
      />
      <FormError error={formik.errors[name]} />
    </>
  );
};

export { FormikInput };
