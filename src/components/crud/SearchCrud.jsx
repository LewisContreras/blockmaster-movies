import { Box, Button, HStack, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { crudSearch } from "../../actions/crudActions";
import { db } from "../../firebase/firebase-config";
import { FaHome } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const SearchCrud = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
        <Icon
          cursor="pointer"
          mx="10px"
          fontSize="20px"
          color="brand.primary"
          as={FaHome}
          onClick={() => {
            dispatch(crudSearch(""));
            history.goBack();
          }}
        />
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
