import React, {forwardRef} from "react";
import { FaStar } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { Center, Text, Box } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { movieModal } from "../../actions/moviesActions";

const CardMovie = forwardRef(({ movie }, ref) => {
  const dispatch = useDispatch();

  const handleClickModal = (movie) => {
    dispatch(movieModal(movie));
  };
  return (
    <Box
      onClick={() => handleClickModal(movie)}
      position="relative"
      backgroundPosition="center"
      borderRadius="10px"
      backgroundSize="cover"
      cursor="pointer"
      backgroundImage={movie.imageUrl}
      w={["150px", "220px"]}
      h={["225px", "330px"]}
      ref={ref}
    >
      <Center
        bgColor="rgba(0,0,0,0.5)"
        color="brand.primary"
        px="30px"
        position="absolute"
        height="64px"
        top="40px"
        border="2px solid"
        borderLeft="none"
        borderRadius="0 32px 32px 0"
        borderColor="brand.primary"
      >
        <Icon mr="10px" as={FaStar} />
        <Text color="brand.white">{movie.calification.toFixed(1)}</Text>
      </Center>
    </Box>
  );
});

export { CardMovie };
