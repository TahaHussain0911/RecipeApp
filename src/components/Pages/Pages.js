import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import Redirect from "../Redirect/Redirect";
import RecipeContext from "../../context/RecipeContext";
import Navbar from "../Navbar/Navbar";
const Pages = () => {
  const getContext = useContext(RecipeContext);
  const { recipe, error } = getContext;
  const [select, setselect] = useState({});
  const handleClick = (e) => {
    // console.log(e.target.src)
    // console.log(recipe)
    setselect(
      recipe.filter((value) => {
        return value.recipe.image == e.target.src;
      })[0]
    );
  };

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Recipe handleClick={handleClick} />} />
        <Route path="/redirect" element={<Redirect select={select.recipe} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
