import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { crudSearch } from "../../actions/crudActions";
import { useHistory } from "react-router-dom";

const GoHomeIcon = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
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
  );
};

export { GoHomeIcon };
