import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crudSearch } from "../../actions/crudActions";
import { db } from "../../firebase/firebase-config";
import { GoHomeIcon } from "./GoHomeIcon";

const SearchCrud = () => {
  const dispatch = useDispatch();
  const searchCrud = useSelector((state) => state.crud.search);
  const inputRef = useRef("");

  const handleSearchCrud = async () => {
    let searched = inputRef.current.value.toUpperCase();
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
      });
    dispatch(crudSearch(movieSearched));
  };

  return (
    <Box py="20px" maxWidth="70%" mx="auto">
      <HStack>
        <GoHomeIcon />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Nombre de la película..."
        />
        <Button bgColor="brand.primary" onClick={handleSearchCrud}>
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
