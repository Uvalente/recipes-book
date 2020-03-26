import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/NewRecipe'
import NewRecipe from './components/NewRecipe';
import Recipe from './components/Recipe';

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

  const recipeComponents = recipeList.map((recipe, index) =>
    <Recipe
      key={index}
      recipeName={recipe.name}
      recipeDescription={recipe.description}
    />
  )

  return (
    <div>
      <NewRecipe onAddRecipe={addRecipeHandler} />
      {recipeComponents}
    </div>
  );
}

export default App;
