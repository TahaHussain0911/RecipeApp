import React from "react";
import Ingredients from "../../containers/Ingredients/Ingredients";
import './Redirect.css'
import { useNavigate } from "react-router-dom";
const Redirect = ({ select }) => {
  let navigate=useNavigate();
  const goBack=()=>{
      navigate('/');
  }
  return (
    <><div className="button-box">
        <button onClick={goBack}>
        <i class="fa-solid fa-arrow-left"></i>        BACK
        </button>
    </div>
      <div className="main-container">
        <img src={select.image} alt="" />
        <div className="ingredient-box">
          <h1>{select.label.slice(0,36)}</h1>

          <h2>Ingredients</h2>
          {select.ingredients.slice(0,6).map((element) => {
              return <Ingredients ingredients={element} />;
            })}
          <a href={select.url} className="btn btn-primary" target="_blank">
            See More
          </a>
        </div>
      </div>
      </>
  );
};

export default Redirect;
