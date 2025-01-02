import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { crudSearch } from "../../actions/crudActions";
import { db } from "../../firebase/firebase-config";
import { GoHomeIcon } from "./GoHomeIcon";

const SearchCrud = () => {
  const dispatch = useDispatch();
  const searchCrud = useSelector((state) => state.crud.search);

  const handleSearchCrud = async (e) => {
    e.preventDefault();
    let searched =
      e.target.firstElementChild.nextElementSibling.value.toUpperCase();
    let movieSearched = [];
    await db
      .collection("movies")
      .where("nameMovie", "==", searched)
      .get()
      .then((snap) => {
        snap.forEach((hijo) => {
          movieSearched.push({
            id: hijo.id,
            ...hijo.data(),
          });
        });
      })
    dispatch(crudSearch(movieSearched));
  };

  return (
    <Box py="20px" maxWidth="70%" mx="auto">
      <HStack as="form" onSubmit={handleSearchCrud}>
        <GoHomeIcon />
        <Input type="text" placeholder="Nombre de la película..." />
        <Button bgColor="brand.primary" type="submit">
          Buscar
        </Button>
      </HStack>
      <Text px="50px">
        {searchCrud.length === 0 && Array.isArray(searchCrud)
          ? "No hay resultados para tu búsqueda"
          : null}
      </Text>
    </Box>
  );
};

export default SearchCrud;
