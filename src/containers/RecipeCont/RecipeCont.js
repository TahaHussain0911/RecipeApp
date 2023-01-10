import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeCont.css";
const RecipeCont = (props) => {
  let navigate = useNavigate();
  const openRef=useRef(null);
  const refClick=()=>{
    openRef.current.click();
  }
  return (
    <div className="box" >
      <img
      ref={openRef}
        src={props.image}
        alt=""
        onClick={(e) => {
          props.handleClick(e);
          navigate("/redirect");
        }}
      />
      <div className="main-content">
        <h2>{props.title.length>18?props.title.slice(0,16)+' ...':props.title}</h2>
        <p>Calories: <span>{Math.round(props.calories)}</span></p>
        <p>Type: <span style={{"textTransform":"capitalize"}}>{props.cuisine}</span></p>
        <button onClick={refClick}>Check Recipe</button>
      </div>
      {/* <ol>
        {props.ingredients.map((element)=>{
            return <li>{element}</li>
        })}
    </ol> */}
    </div>
  );
};

export default RecipeCont;
