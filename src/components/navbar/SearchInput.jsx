import React, { useRef } from "react";
import { InputGroup, InputRightElement, Input } from "@chakra-ui/input";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  movieSearch,
  startMovieSelected,
} from "../../actions/moviesActions";

const SearchInput = () => {
  const inputRef = useRef("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    let valueInput = inputRef.current.value;
    dispatch(movieSearch(valueInput));
    dispatch(startMovieSelected(valueInput));
    window.scrollTo({
      top: 320,
      behavior: "smooth",
    });
    let navCategories = document.querySelectorAll(".nav-category");
    for (let i of navCategories) {
      i.style.color = "white";
      i.style.border = "none";
    }
    inputRef.current.value = "";
  };

  return (
    <InputGroup width={["90%", "90%", "100%"]}>
      <InputRightElement
        onClick={handleSearch}
        cursor="pointer"
        backgroundColor="brand.primary"
        width={["72px", "72px", "32px", "72px"]}
        borderRadius="0 10px 10px 0"
        children={<FaSearch color="black" />}
      />
      <Input
        ref={inputRef}
        color="brand.black"
        border="2px solid"
        borderColor="brand.primary"
        borderRadius="10px"
        backgroundColor="brand.white"
        type="tel"
        placeholder="Busca tu película favorita"
      />
    </InputGroup>
  );
};

export { SearchInput };
