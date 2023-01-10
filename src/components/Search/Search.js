import React,{useContext,useState} from 'react'
import './Search.css'
import RecipeContext from '../../context/RecipeContext'
// import { useLocation } from 'react-router-dom'
const Search = () => {
  const getRecipe=useContext(RecipeContext);
  const {setsearch,search }=getRecipe;
  // let location=useLocation();
  const [query, setquery] = useState('')
  const onChange=(e)=>{
    // console.log(e.target.value);
    setquery(e.target.value);
  }
  const handleClick=(event)=>{
    // try {
      event.preventDefault();
      setsearch(query)
      setquery('')
 
  }

  return (
    <div className='search-container'>
      <div className="search-bar">
      <form action="" className='search-bar' onSubmit={handleClick}>
        <input type="text" name="" style={{"textTransform":"capitalize"}}
        id=""  value={query} onChange={onChange} placeholder={`Showing results for ${search}`}/>
        <button type="submit" ><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      </div>
    </div>
  )
}

export default Search