import { Img } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieSearch, startMovieSelected } from "../../actions/moviesActions";
import { MenuOptions } from "./MenuOptions";
import { LogoutIcon } from "./LogoutIcon";
import { SearchInput } from "./SearchInput";
import { GoCrud } from "./GoCrud";

function NavbarMain() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.movies.search);
  const uid = useSelector((state) => state.auth.uid);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      dispatch(movieSearch(search));
      dispatch(startMovieSelected(search));
      mounted.current = true;
    }
  }, [dispatch, search]);

  return (
    <Flex
      flexDir={["column", "column", "row"]}
      position={["relative", "relative", "fixed"]}
      top="0"
      pt={["10px", "10px", "0"]}
      width="100%"
      px={["20px", "40px"]}
      h={["auto", "auto", "112px"]}
      backgroundColor="brand.background"
      zIndex="100"
      alignItems="center"
      gap="4"
    >
      <Img src="https://i.imgur.com/pwIYVhf.png" alt="Logo de Blockmaster" />
      <MenuOptions />
      <SearchInput />
      {uid === process.env.REACT_APP_ADMIN_CRUD && <GoCrud />}
      <LogoutIcon />
    </Flex>
  );
}

export default NavbarMain;
