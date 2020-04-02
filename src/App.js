import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/header/Header'
import NewRecipe from './components/newRecipe/NewRecipe'
import RecipeCard from './components/recipeCard/RecipeCard'
import Footer from './components/footer/Footer'
import './App.css'
import db from './firebase'

function App() {
  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
    db.collection('recipes')
      .orderBy('name')
      .onSnapshot(snapShot => {
        const recipes = []
        snapShot.forEach(recipe => {
          recipes.push(recipe.data())
        })
        setRecipeList(recipes)
      })

  }, [])

  const recipeComponents = recipeList.map((recipe, index) =>
    <RecipeCard
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
            <NewRecipe />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
