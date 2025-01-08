import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { FormError } from "../common/FormError";
import { FormikInput } from "../common/FormikInput";

const FormCrudPresenter = ({ formik, handleReset, handleImage }) => {
  return (
    <Flex mt="20px" justifyContent="center">
      <Box
        maxWidth="500px"
        mb="20px"
        borderRadius="10px"
        p="20px"
        bgColor="whiteAlpha.300"
      >
        <Box
          as="form"
          onSubmit={(e) => {
            formik.handleSubmit();
            handleReset(e);
          }}
        >
          <Text textAlign="center" fontSize="2xl" color="brand.primary">
            Agrega una nueva película
          </Text>
          <VStack spacing="20px">
            <FormControl id="movie-name">
              <FormLabel>Nombre *</FormLabel>
              <FormikInput
                name="nameMovie"
                type="text"
                placeholder="Nombre de la pelicula"
                formik={formik}
              />
            </FormControl>
            <FormControl id="movie-description">
              <FormLabel>Descripción *</FormLabel>
              <Textarea
                height="fit-content"
                name="description"
                borderColor="brand.primary"
                value={formik.values.description}
                onChange={formik.handleChange}
              ></Textarea>
              <FormError error={formik.errors.description} />
            </FormControl>
            <FormControl id="movie-genre">
              <FormLabel>Género *</FormLabel>
              <FormikInput
                name="genre"
                type="text"
                placeholder="Género"
                formik={formik}
              />
            </FormControl>
            <FormControl id="movie-image">
              <FormLabel>Imagen *</FormLabel>
              <Input
                type="file"
                borderColor="brand.primary"
                name="duration"
                onChange={handleImage}
              />
              <FormError error={formik.errors.imageUrl} />
            </FormControl>
            <HStack alignItems="start" spacing="20px">
              <FormControl id="movie-year">
                <FormLabel>Año *</FormLabel>
                <FormikInput
                  name="year"
                  type="number"
                  placeholder="Año"
                  formik={formik}
                />
              </FormControl>
              <FormControl id="movie-calification">
                <FormLabel>Calificación *</FormLabel>
                <FormikInput
                  name="calification"
                  type="number"
                  placeholder="Calificación"
                  formik={formik}
                  step="0.1"
                />
              </FormControl>
              <FormControl id="movie-duration">
                <FormLabel>Duración *</FormLabel>
                <FormikInput
                  name="duration"
                  type="number"
                  placeholder="Duración"
                  formik={formik}
                />
              </FormControl>
            </HStack>
            <Button type="submit" bgColor="blackAlpha.600" width="60%">
              Enviar
            </Button>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export { FormCrudPresenter };
