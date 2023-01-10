import React, { useContext } from "react";
import RecipeCont from "../../containers/RecipeCont/RecipeCont";
import RecipeContext from "../../context/RecipeContext";
import "./Recipe.css";
import Search from "../Search/Search";
import Try from "../../containers/Error/Try";
import Spinner from "../../containers/Spinner/Spinner";
const Recipe = (props) => {
  const getContext = useContext(RecipeContext);
  const {recipe,error,loadingBar } = getContext; 
  return (
    <>
    <Search />
    {error && <Try />}
      {loadingBar && <Spinner/>}
    <div className="recipe-container">
      {!loadingBar && recipe.map((element) => {
        return (
          <RecipeCont
            ingredients={element.recipe.ingredientLines}
            title={element.recipe.label}
            calories={element.recipe.calories}
            image={element.recipe.image}
            cuisine={element.recipe.cuisineType}
            key={element.recipe.totalWeight}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
    </>
  );
};

export default Recipe;
