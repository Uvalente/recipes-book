import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/header/Header'
import NewRecipe from './components/newRecipe/NewRecipe'
import RecipeCollection from './components/recipeCollection/RecipeCollection'
import Recipe from './components/recipe/Recipe'
import Footer from './components/footer/Footer'
import './App.css'
import UserProvider, { UserContext } from './providers/UserProvider'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'

function App() {
  const AuthenticatedRoutes = (props) =>
    <Switch>
      <Route exact path='/'>
        <div className='recipes-wrapper'>
          <RecipeCollection user={props.user}/>
        </div>
      </Route>
      <Route path='/recipes/new'>
        <NewRecipe user={props.user} />
      </Route>
      {/* <Route path='/recipes/:id' render={(props) => <Recipe {...recipeList[props.match.params.id]} />} /> */}
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
