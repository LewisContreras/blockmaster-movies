import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Img,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { crudSearch } from "../../actions/crudActions";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
import Swal from "sweetalert2";
import "../../styles/animations.css";

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
    <Center
      className="scene_element scene_element--fadein"
      position="fixed"
      zIndex="100"
      w="100vw"
      h="100vh"
      top="0"
      as="form"
      bgColor="rgba(15,14,23,0.9)"
      p="10px"
      onSubmit={formik.handleSubmit}
    >
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        bgColor="brand.background"
        border="4px solid"
        borderColor="brand.primary"
        height="500px"
      >
        <Box
          position="absolute"
          top="20px"
          cursor="pointer"
          borderRadius="4px"
          bgColor="red"
          right="20px"
          onClick={() => dispatch(crudSearch(""))}
        >
          <Icon color="white" fontSize="30px" as={MdClose} />
        </Box>
        <HStack
          className="scene_element scene_element--fadeinright"
          px="10px"
          spacing={10}
        >
          <VStack width="250px">
            <FormControl>
              <Input
                name="nameMovie"
                placeholder="Nombre de la película"
                value={formik.values.nameMovie}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.nameMovie && !!formik.errors.nameMovie
                }
              />
            </FormControl>
            <Img
              id="image-element"
              height="240px"
              src={formik.values.imageUrl}
            />
            <Button
              colorScheme="teal"
              onClick={() =>
                document.getElementById("update-image-input").click()
              }
            >
              Cambiar foto
            </Button>
            <Input
              id="update-image-input"
              display="none"
              type="file"
              onChange={(e) =>
                handleNewImage(e.target.files[0], formik.setFieldValue)
              }
            />
          </VStack>

          <VStack alignItems="start" width="400px">
            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                name="description"
                placeholder="Descripción"
                value={formik.values.description}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.description && !!formik.errors.description
                }
              />
            </FormControl>
            <HStack spacing={10}>
              <FormControl>
                <FormLabel>Calificación</FormLabel>
                <Input
                  name="calification"
                  type="number"
                  placeholder="Calificación"
                  value={formik.values.calification}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.calification && !!formik.errors.calification
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Año</FormLabel>
                <Input
                  name="year"
                  type="number"
                  placeholder="Año"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.year && !!formik.errors.year}
                />
              </FormControl>
            </HStack>
            <HStack spacing={8}>
              <FormControl>
                <FormLabel>Género</FormLabel>
                <Input
                  name="genre"
                  placeholder="Género"
                  value={formik.values.genre}
                  onChange={formik.handleChange}
                  isInvalid={formik.touched.genre && !!formik.errors.genre}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Duración</FormLabel>
                <Input
                  name="duration"
                  type="number"
                  placeholder="Duración"
                  value={formik.values.duration}
                  onChange={formik.handleChange}
                  isInvalid={
                    formik.touched.duration && !!formik.errors.duration
                  }
                />
              </FormControl>
            </HStack>
          </VStack>
        </HStack>
        <HStack mt="20px">
          <Button colorScheme="red" onClick={handleDelete}>
            Eliminar
          </Button>
          <Button type="submit" colorScheme="teal">
            Actualizar
          </Button>
        </HStack>
      </Box>
    </Center>
  );
};

export { CardCrud };
