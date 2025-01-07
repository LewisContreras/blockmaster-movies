import React from "react";
import "../../styles/animations.css";
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
import { crudSearch } from "../../actions/crudActions";
import { FormikInput } from "../common/FormikInput";

const CardCrudPresenter = ({ formik, handleNewImage, handleDelete }) => {
  const dispatch = useDispatch();
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
              <FormikInput
                name="nameMovie"
                type="text"
                placeholder="Nombre"
                formik={formik}
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
                borderColor="brand.primary"
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
                <FormikInput
                  name="calification"
                  type="number"
                  placeholder="Calificación"
                  formik={formik}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Año</FormLabel>
                <FormikInput
                  name="year"
                  type="number"
                  placeholder="Año"
                  formik={formik}
                />
              </FormControl>
            </HStack>
            <HStack spacing={8}>
              <FormControl>
                <FormLabel>Género</FormLabel>
                <FormikInput
                  name="genre"
                  type="text"
                  placeholder="Género"
                  formik={formik}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Duración</FormLabel>
                <FormikInput
                  name="duration"
                  type="number"
                  placeholder="Duración"
                  formik={formik}
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

export { CardCrudPresenter };
