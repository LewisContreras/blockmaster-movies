import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crudSearch } from "../../actions/crudActions";
import { GoHomeIcon } from "./GoHomeIcon";
import { getMovie } from "../../helpers/goSearchMovies";

const SearchCrud = () => {
  const dispatch = useDispatch();
  const searchCrud = useSelector((state) => state.crud.search);
  const inputRef = useRef("");

  const handleSearchCrud = async () => {
    let movieSearched = getMovie(inputRef.current.value);
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
