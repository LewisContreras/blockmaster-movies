import React from "react";
import CardsCrud from "../components/crud/CardsCrud";
import FormCrud from "../components/crud/FormCrud";
import SearchCrud from "../components/crud/SearchCrud";

const Crud = () => {
  return (
    <>
      <SearchCrud />
      <CardsCrud />
      <FormCrud />
    </>
  );
};

export default Crud;
