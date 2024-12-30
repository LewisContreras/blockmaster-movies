import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { db } from "../../firebase/firebase-config";
import { useSelector, useDispatch } from "react-redux";
import { fileUpload } from "../../helpers/fileUpload";
import { crudSearch } from "../../actions/crudActions";
import Swal from "sweetalert2";
import "../../styles/animations.css";
import { CardCrud } from "./CardCrud";

const CardsCrud = () => {
  const searchCrud = useSelector((state) => state.crud.search);
  const dispatch = useDispatch();

  const handleDelete = async (movie) => {
    await db.doc(`movies/${movie.id}`).delete();

    Swal.fire({
      icon: "success",
      title: "!Genial¡",
      text: "Ha sido eliminada correctamente",
    });
    dispatch(crudSearch([]));
  };

  const handleUpdate = async (e) => {
    let genre = e.target.parentElement.parentElement.parentElement;
    let area = genre.querySelector("#update-description-area");
    let image = genre.querySelector("#update-image");
    let inputs = genre.querySelectorAll("input");
    for (const input of inputs) {
      input.disabled = false;
      input.style.border = "1px solid white";
      if (input.name === "update") {
        input.style.backgroundColor = "#00A300";
      }
    }
    area.disabled = false;
    area.style.border = "1px solid white";
    image.style.display = "block";
  };

  const handleUpdateSubmit = async (e, movie) => {
    e.preventDefault();
    let form = e.target;
    let area = document.getElementById("update-description-area");
    let image = document.getElementById("image-element");
    let inputs = form.querySelectorAll("input");
    let updatedMovie = {};
    for (const input of inputs) {
      if (input.name === "update" || input.name === "update-image-input") {
        continue;
      }
      if (
        input.name === "calification" ||
        input.name === "year" ||
        input.name === "duration"
      ) {
        updatedMovie[input.name] = +input.value;
      } else if (input.name === "nameMovie") {
        updatedMovie[input.name] = input.value.toUpperCase();
      } else {
        updatedMovie[input.name] = input.value;
      }
    }
    updatedMovie[area.name] = area.value;
    updatedMovie.imageUrl = image.src;
    await db.doc(`movies/${movie.id}`).update(updatedMovie);
    Swal.fire({
      icon: "success",
      title: "!Bien!",
      text: "Ha sido actualizado",
    });
    dispatch(crudSearch(""));
  };

  const handleChangeImage = () => {
    let inputFile = document.getElementById("update-image-input");
    inputFile.click();
  };

  const handleNewImage = async (e) => {
    let file = e.target.files[0];
    let secureUrl = await fileUpload(file);
    let image = document.getElementById("image-element");
    image.src = secureUrl;
    console.log(secureUrl);
  };

  return (
    <Box>
      {!searchCrud.length ? (
        <Text></Text>
      ) : (
        searchCrud.map((movie) => (
          <CardCrud
            key={movie.id}
            movie={movie}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleUpdateSubmit={handleUpdateSubmit}
            handleChangeImage={handleChangeImage}
            handleNewImage={handleNewImage}
          />
        ))
      )}
    </Box>
  );
};

export default CardsCrud;
