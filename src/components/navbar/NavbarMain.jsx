import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import { MenuOptions } from "./MenuOptions";
import { LogoutIcon } from "./LogoutIcon";
import { SearchInput } from "./SearchInput";
import { GoCrud } from "./GoCrud";
import { LogoBlockmaster } from "../common/LogoBlockmaster";

function NavbarMain() {
  const uid = useSelector((state) => state.auth.uid);

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
      <LogoBlockmaster />
      <MenuOptions />
      <SearchInput />
      {uid === process.env.REACT_APP_ADMIN_CRUD && <GoCrud />}
      <LogoutIcon />
    </Flex>
  );
}

export default NavbarMain;
