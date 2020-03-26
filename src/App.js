import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/NewRecipe'
import NewRecipe from './components/NewRecipe';

function App() {
  const [recipeList, setRecipeList] = useState([])
  const addRecipeHandler = (recipeForm) => {
    setRecipeList(currentRecipeList => [
      ...currentRecipeList,
      {
        name: recipeForm.recipeName,
        description: recipeForm.recipeDescription
      }
    ])
  }

  return (
    <NewRecipe onAddRecipe={addRecipeHandler} />
  );
}

export default App;
