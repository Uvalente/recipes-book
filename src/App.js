import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/NewRecipe'
import NewRecipe from './components/NewRecipe';
import Recipe from './components/Recipe';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Header />
      <NewRecipe onAddRecipe={addRecipeHandler} />
      {recipeComponents}
      <Footer />
    </div>
  );
}

export default App;
