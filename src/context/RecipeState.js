import React,{useState,useEffect} from 'react'
import RecipeContext from './RecipeContext'
const RecipeState = (props) => {
    const [search, setsearch] = useState('chocolate')
    const appId='0b8687e0';
    const apiKey='c5e1a7dce44e250c764dccc1b6543a29';
    const [error, seterror] = useState(false)
    const [recipe, setrecipe] = useState([])
    const [loadingBar, setloadingBar] = useState(false)
    const updateRecipe=async()=>{
        setloadingBar(true);
        seterror(false)
        const url=`https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}&from=0&to=9`
        const response=await fetch(url)
        const getData=await response.json();
        console.log(getData.hits.length); 
        setrecipe(getData.hits);
        console.log(getData.hits)
        if (getData.hits.length===0) {
          seterror(true)
        }
        else{
          seterror(false);
        }
        setloadingBar(false);
        
      // console.log(getData.hits)
    } 
    useEffect(() => {
      updateRecipe();
    }, [search])
    return (
    <RecipeContext.Provider value={{updateRecipe,recipe,setsearch,search,error,seterror,loadingBar,setloadingBar}}>
        {props.children}
    </RecipeContext.Provider>
    )
}

export default RecipeState