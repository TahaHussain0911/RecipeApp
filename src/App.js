import React from 'react';
import './App.css';
import Pages from './components/Pages/Pages';
import RecipeState from './context/RecipeState'; 
function App() {
  return (
    <RecipeState>
      
      <Pages/>
    </RecipeState>
  );
}

export default App;
