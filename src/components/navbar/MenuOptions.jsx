import React from "react";
import { HStack, Text } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { movieLastDoc, movieSearch, startMovieSelected } from "../../actions/moviesActions";

const menuOptionsList = ["Todas", "Más valoradas", "Menos valoradas"];

const MenuOptions = () => {
    const dispatch = useDispatch();
  const handleClickCategories = (e) => {
    let contenido = e.target.textContent;
    dispatch(movieLastDoc(null));
    dispatch(movieSearch(contenido));
    dispatch(startMovieSelected(contenido));
    window.scrollTo({
      top: 380,
      behavior: "smooth",
    });
    let navCategories = document.querySelectorAll(".nav-category");
    for (let i of navCategories) {
      if (i.textContent === e.target.textContent) {
        i.style.color = "#FED941";
        i.style.borderBottom = "2px solid #FED941";
      } else {
        i.style.color = "white";
        i.style.border = "none";
      }
    }
  };

  return (
    <HStack
      minWidth={["300px", "300px", "300px", "400px"]}
      justifyContent="space-evenly"
      spacing={[4, 10, 2, 10]}
      py={["10px", "10px", "0"]}
    >
      {menuOptionsList.map((menuOption, index) => (
        <Text
          key={index}
          className="nav-category"
          fontWeight="600"
          onClick={handleClickCategories}
          cursor="pointer"
        >
          {menuOption}
        </Text>
      ))}
    </HStack>
  );
};

export { MenuOptions };
