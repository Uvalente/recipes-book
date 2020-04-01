import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/header/Header'
import NewRecipe from './components/newRecipe/NewRecipe'
import Recipe from './components/recipe/Recipe'
import Footer from './components/footer/Footer'
import './App.css'


function App() {
  const [recipeList, setRecipeList] = useState([])
  const addRecipeHandler = (recipeForm) => {
    setRecipeList(currentRecipeList => [
      ...currentRecipeList,
      {
        name: recipeForm.recipeName,
        description: recipeForm.recipeDescription,
        course: recipeForm.recipeCourse
      }
    ])
  }

  const recipeComponents = recipeList.map((recipe, index) =>
    <Recipe
      key={index}
      recipeName={recipe.name}
      recipeDescription={recipe.description}
      recipeCourse={recipe.course}
    />
  )

  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <div className='recipes-wrapper'>
              {recipeComponents}
            </div>
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
