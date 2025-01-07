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
              <Input
                type="text"
                name="nameMovie"
                value={formik.values.nameMovie}
                onChange={formik.handleChange}
              />
              <FormError error={formik.errors.nameMovie} />
            </FormControl>
            <FormControl id="movie-description">
              <FormLabel>Descripción *</FormLabel>
              <Textarea
                height="fit-content"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
              ></Textarea>
              <FormError error={formik.errors.description} />
            </FormControl>
            <FormControl id="movie-genre">
              <FormLabel>Género *</FormLabel>
              <Input
                type="text"
                name="genre"
                value={formik.values.genre}
                onChange={formik.handleChange}
              />
              <FormError error={formik.errors.genre} />
            </FormControl>
            <FormControl id="movie-image">
              <FormLabel>Imagen *</FormLabel>
              <Input type="file" name="duration" onChange={handleImage} />
              <FormError error={formik.errors.imageUrl} />
            </FormControl>
            <HStack alignItems="start" spacing="20px">
              <FormControl id="movie-year">
                <FormLabel>Año *</FormLabel>
                <Input
                  type="number"
                  name="year"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                />
                <FormError error={formik.errors.year} />
              </FormControl>
              <FormControl id="movie-calification">
                <FormLabel>Calificación *</FormLabel>
                <Input
                  type="number"
                  step="0.1"
                  name="calification"
                  value={formik.values.calification}
                  onChange={formik.handleChange}
                />
                <FormError error={formik.errors.calification} />
              </FormControl>
              <FormControl id="movie-duration">
                <FormLabel>Duración *</FormLabel>
                <Input
                  type="number"
                  name="duration"
                  value={formik.values.duration}
                  onChange={formik.handleChange}
                />
                <FormError error={formik.errors.duration} />
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
