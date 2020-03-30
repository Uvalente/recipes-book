import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import NewRecipe from './components/NewRecipe';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import './App.css';


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
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/'>
            {recipeComponents}
          </Route>
          <Route path='/recipes/new'>
            <NewRecipe onAddRecipe={addRecipeHandler} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
