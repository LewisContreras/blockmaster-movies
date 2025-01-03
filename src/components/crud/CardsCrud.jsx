import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { CardCrud } from "./CardCrudContainer";

const CardsCrud = () => {
  const searchCrud = useSelector((state) => state.crud.search);

  return (
    <Box>
      {!searchCrud.length ? (
        <Text></Text>
      ) : (
        searchCrud.map((movie) => (
          <CardCrud
            key={movie.id}
            movie={movie}
          />
        ))
      )}
    </Box>
  );
};

export default CardsCrud;
