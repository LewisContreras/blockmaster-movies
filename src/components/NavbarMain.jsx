import Icon from "@chakra-ui/icon";
import { Img } from "@chakra-ui/image";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Flex, HStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  movieLastDoc,
  movieSearch,
  startMovieSelected,
} from "../actions/moviesActions";
import { MenuOptions } from "./MenuOptions";
import { LogoutIcon } from "./LogoutIcon";
// import GoCrud from './GoCrud'

function NavbarMain() {
  const inputRef = useRef("");
  const dispatch = useDispatch();
  // const uid = useSelector(state => state.auth.uid)
  const search = useSelector((state) => state.movies.search);
  const [loading, setLoading] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (loading && search === "Todas") {
      dispatch(startMovieSelected(search));
    }
    if (!mounted.current) {
      let navCategories = document.querySelectorAll(".nav-category");
      for (let i of navCategories) {
        if (i.textContent === search) {
          i.style.color = "#FED941";
          i.style.borderBottom = "2px solid #FED941";
        }
      }
      dispatch(movieSearch(search));
      dispatch(startMovieSelected(search));
      mounted.current = true;
    }
  }, [loading, dispatch, search]);

  const handleSearch = () => {
    let valueInput = inputRef.current.value;
    dispatch(movieLastDoc(null));
    dispatch(movieSearch(valueInput));
    dispatch(startMovieSelected(valueInput));
    setLoading(false);
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
    <Flex
      alignItems="center"
      position={["relative", "relative", "fixed"]}
      top="0"
      zIndex="100"
      width="100%"
      h={["auto", "auto", "112px"]}
      backgroundColor="brand.background"
    >
      <HStack
        flexDir={["column", "column", "row"]}
        pt={["10px", "10px", "0"]}
        spacing={[0, 0, 1, 8]}
        width={["100%", "100%", "90%"]}
        mx="auto"
      >
        <Img src="https://i.imgur.com/pwIYVhf.png" alt="Logo de Blockmaster" />
        <MenuOptions />
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
        <LogoutIcon />
      </HStack>
    </Flex>
  );
}

export default NavbarMain;
