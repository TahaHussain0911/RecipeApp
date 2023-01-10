import React,{useRef,useState} from "react";
import Ingredients from "../../containers/Ingredients/Ingredients";
import './Redirect.css'
import { useNavigate } from "react-router-dom";
const Redirect = ({ select }) => {
  let navigate=useNavigate();
  const [active, setactive] = useState(false)
  const backRef=useRef(null);
  const goBack=()=>{
      backRef.current.classList.add('effect-back')
      setactive(true)
      setTimeout(() => {
        
        navigate('/');
      }, 200);
  }
  // const backFunc=()=>{

  // }
  return (
    <><div className={`button-box ${active &&"effect-back"}`}>
        <button onClick={goBack}>
        <i class="fa-solid fa-arrow-left"></i>BACK
        </button>
    </div>
      <div className="main-container" ref={backRef}>
        <img src={select.image} alt="" />
        <div className="ingredient-box">
          <h1>{select.label.slice(0,36)}</h1>

          <h2>Ingredients</h2>
          {select.ingredients.slice(0,6).map((element) => {
              return <Ingredients ingredients={element} />;
            })}
          <a href={select.url} className="btn btn-primary" rel="noreferrer" target="_blank">
            See More
          </a>
        </div>
      </div>
      </>
  );
};

export default Redirect;
