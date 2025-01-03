import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { crudSearch } from "../../actions/crudActions";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
import Swal from "sweetalert2";
import { CardCrudPresenter } from "./CardCrudPresenter";
const CardCrud = ({ movie }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await db.doc(`movies/${movie.id}`).delete();

    Swal.fire({
      icon: "success",
      title: "!Genial¡",
      text: "Ha sido eliminada correctamente",
    });
    dispatch(crudSearch([]));
  };

  const handleNewImage = async (file, setFieldValue) => {
    const secureUrl = await fileUpload(file);
    setFieldValue("imageUrl", secureUrl);
  };

  const formik = useFormik({
    initialValues: {
      nameMovie: movie.nameMovie,
      description: movie.description,
      calification: movie.calification,
      year: movie.year,
      genre: movie.genre,
      duration: movie.duration,
      imageUrl: movie.imageUrl,
    },
    validationSchema: Yup.object({
      nameMovie: Yup.string().required("El nombre es obligatorio"),
      description: Yup.string().required("La descripción es obligatoria"),
      calification: Yup.number()
        .min(0, "Debe ser al menos 0")
        .max(10, "Debe ser como máximo 10")
        .required("La calificación es obligatoria"),
      year: Yup.number()
        .min(1900, "Año no válido")
        .max(new Date().getFullYear(), "Año no válido")
        .required("El año es obligatorio"),
      genre: Yup.string().required("El género es obligatorio"),
      duration: Yup.number()
        .min(1, "Debe ser al menos 1")
        .required("La duración es obligatoria"),
    }),
    onSubmit: async (values) => {
      await db.doc(`movies/${movie.id}`).update(values);
      Swal.fire({
        icon: "success",
        title: "!Bien!",
        text: "Ha sido actualizado",
      });
      dispatch(crudSearch(""));
    },
  });

  return (
    <CardCrudPresenter
      formik={formik}
      handleNewImage={handleNewImage}
      handleDelete={handleDelete}
    />
  );
};

export { CardCrud };
