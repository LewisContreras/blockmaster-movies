import React from "react";
import { GiExitDoor } from "react-icons/gi";
import { useDispatch} from "react-redux";
import { startLogout } from "../../actions/authActions";
import { Icon } from "@chakra-ui/react";


const LogoutIcon = () => {
    const dispatch = useDispatch();
    return (
        <Icon
          position={["absolute", "absolute", "relative"]}
          top={["20px", "20px", "0"]}
          right={["20px", "20px", "0"]}
          fontSize="30px"
          color="red"
          cursor="pointer"
          onClick={() => dispatch(startLogout())}
          as={GiExitDoor}
        />
    )
}

export { LogoutIcon }