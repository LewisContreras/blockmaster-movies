import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { fileUpload } from "../../helpers/fileUpload";
import Swal from "sweetalert2";
import { FormCrudPresenter } from "./FormCrudPresenter";
import { addMovie } from "../../helpers/goSearchMovies";

const FormCrud = () => {
  const formik = useFormik({
    initialValues: {
      nameMovie: "",
      description: "",
      genre: "",
      year: 0,
      calification: 0,
      duration: 0,
      imageUrl: "",
    },
    validationSchema: Yup.object({
      nameMovie: Yup.string()
        .min(1, "Debe tener al menos 1 caracter")
        .required("Este campo es requerido"),
      description: Yup.string()
        .max(300, "Puede tener como máximo 300 caracteres")
        .min(50, "Debe tener como minimo 50 caracteres")
        .required("Este campo es requerido"),
      genre: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .min(1, "Debe tener al menos 1 caracter")
        .required("Este campo es requerido"),
      imageUrl: Yup.string()
        .min(1, "Debe elegir una imagen")
        .required("requerido"),
      year: Yup.number()
        .min(1800, "Debe ser amyor a 1800")
        .max(2022, "Debe ser menor a 2023")
        .required("Requerido"),
      calification: Yup.number()
        .min(0, "Debe ser mayor a 0")
        .max(10, "Debe ser menor a 10")
        .required("Requerido"),
      duration: Yup.number()
        .min(20, "Debe ser mayor a 20")
        .max(600, "Debe ser menor a 600")
        .required("Requerido"),
    }),
    validateOnChange: (values) => {
      console.log(values);
    },
    onSubmit: (values) => {
      values.nameMovie = values.nameMovie.toUpperCase();
      addMovie(values);
      Swal.fire({
        icon: "success",
        title: "!Genial!",
        text: "Se ha agregado la película",
      });
    },
  });

  const handleImage = async (e) => {
    let file = e.target.files[0];
    if (file) {
      let secureUrl = await fileUpload(file);
      console.log(secureUrl);
      formik.values.imageUrl = secureUrl;
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <FormCrudPresenter
      formik={formik}
      handleImage={handleImage}
      handleReset={handleReset}
    />
  );
};

export default FormCrud;
