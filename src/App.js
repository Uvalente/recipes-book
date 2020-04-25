import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/header/Header'
import NewRecipe from './components/newRecipe/NewRecipe'
import RecipeCard from './components/recipeCard/RecipeCard'
import Recipe from './components/recipe/Recipe'
import Footer from './components/footer/Footer'
import './App.css'
import { db, auth } from './firebase'
import UserProvider, { UserContext } from './providers/UserProvider'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'

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
      id={index}
      recipeName={recipe.name}
      recipeDescription={recipe.description}
      recipeCourse={recipe.course}
    />
  )

  const AuthenticatedRoutes = (props) =>
    <Switch>
      <Route exact path='/'>
        <div className='recipes-wrapper'>
          {recipeComponents}
        </div>
      </Route>
      <Route path='/recipes/new'>
        <NewRecipe user={props.user} />
      </Route>
      <Route path='/recipes/:id' render={(props) => <Recipe {...recipeList[props.match.params.id]} />} />
    </Switch>


  const NotAuthenticatedRoutes = () =>
    <Switch>
      <Route exact path={['/', '/login']}>
        <Login />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
    </Switch>

  return (
    <UserProvider>
      <Router>
        <div className='container'>
          <Header />
          <UserContext.Consumer>
            {
              currentUser =>
                currentUser.user
                  ?
                  <AuthenticatedRoutes user={currentUser.user} />
                  :
                  <NotAuthenticatedRoutes />
            }
          </UserContext.Consumer>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
