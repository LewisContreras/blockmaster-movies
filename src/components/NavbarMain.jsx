import { Img } from "@chakra-ui/image";
import { Flex, HStack } from "@chakra-ui/layout";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSearch, startMovieSelected } from "../actions/moviesActions";
import { MenuOptions } from "./MenuOptions";
import { LogoutIcon } from "./LogoutIcon";
import { SearchInput } from "./SearchInput";
// import GoCrud from './GoCrud'

function NavbarMain() {
  const dispatch = useDispatch();
  // const uid = useSelector(state => state.auth.uid)
  const search = useSelector((state) => state.movies.search);
  const mounted = useRef(false);

  useEffect(() => {
    // if (loading && search === "Todas") {
    //   dispatch(startMovieSelected(search));
    // }
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
  }, [dispatch, search]);

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
        <SearchInput />
        <LogoutIcon />
      </HStack>
    </Flex>
  );
}

export default NavbarMain;
