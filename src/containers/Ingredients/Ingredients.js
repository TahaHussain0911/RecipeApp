import React from 'react'
import './Ingredients.css'
const Ingredients = ({ingredients}) => {
  return (
    
      <p>
      {ingredients.text} {ingredients.quantity} {ingredients.measure} {ingredients.food}
      </p>
    
  )
}

export default Ingredients