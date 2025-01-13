import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Img } from "@chakra-ui/image";
import { Flex, HStack, Text, VStack, Box } from "@chakra-ui/layout";
import React from "react";
import { FaPlay, FaPlus, FaTrash } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  movieModal,
  startAddingWatchLater,
  startRemovingWatchLater,
} from "../../actions/moviesActions";
import "../../styles/animations.css";

function ModalEachMovie() {
  const modal = useSelector((state) => state.movies.modal);
  const watchLater = useSelector((state) => state.movies.watchLater);
  const dispatch = useDispatch();

  const handleSeeAfter = (movie) => {
    dispatch(startAddingWatchLater(movie));
  };

  const isInWatchLater = watchLater.find((movie) => movie.id === modal?.id);

  const handleRemoveFromWatchLater = (docId) => {
    dispatch(startRemovingWatchLater(docId));
  };

  return !modal ? (
    <Box display="none"></Box>
  ) : (
    <Flex
      className="scene_element scene_element--fadein"
      justifyContent="center"
      alignItems="center"
      bgColor="rgba(15,14,23,0.9)"
      position="fixed"
      top="0"
      width="100vw"
      h="100vh"
      p={["0", "40px"]}
      zIndex="100"
    >
      <HStack
        flexDir={["column", "row"]}
        pt={["80px", "0"]}
        position="relative"
        spacing="30px"
        maxWidth="700px"
        h="fit-content"
      >
        <Img
          h="330px"
          width="220px"
          src={modal.imageUrl}
          alt={modal.nameMovie}
        />
        <Icon
          onClick={() => dispatch(movieModal(null))}
          cursor="pointer"
          fontSize="30px"
          top="0"
          right="40px"
          bgColor="red"
          borderRadius="4px"
          position="absolute"
          as={MdClose}
        />
        <VStack pt={3} spacing={3} alignItems="start">
          <Text fontWeight="600" fontSize="xl">
            {modal.nameMovie}
          </Text>
          <Text>{modal.description}</Text>
          <Text>{`${modal.year} * ${modal.genre} * ${Math.floor(
            modal.duration / 60
          )}h ${modal.duration % 60}min`}</Text>
          <HStack>
            <Button
              disabled
              leftIcon={<FaPlay />}
              color="brand.black"
              bgColor="brand.primary"
            >
              VER AHORA
            </Button>
            {!!isInWatchLater ? (
              <Button
                leftIcon={<FaTrash />}
                border="2px solid"
                borderColor="red"
                color="red"
                bgColor="brand.background"
                onClick={() =>
                  handleRemoveFromWatchLater(isInWatchLater.watchLaterId)
                }
              >
                ELIMINAR DE MI LISTA
              </Button>
            ) : (
              <Button
                leftIcon={<FaPlus />}
                border="2px solid"
                borderColor="brand.primary"
                color="brand.primary"
                bgColor="brand.background"
                onClick={() => handleSeeAfter(modal)}
              >
                VER DESPUÉS
              </Button>
            )}
          </HStack>
        </VStack>
      </HStack>
    </Flex>
  );
}

export default ModalEachMovie;
