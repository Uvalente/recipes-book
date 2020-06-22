import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Header from './components/header/Header'
import NewRecipe from './components/newRecipe/NewRecipe'
import RecipeCollection from './components/recipeCollection/RecipeCollection'
import Recipe from './components/recipe/Recipe'
import Footer from './components/footer/Footer'
import { UserContext } from './providers/UserProvider'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import NotFoundPage from './components/notFoundPage/NotFoundPage'
import UserCollection from './components/userCollection/UserCollection'

function App() {
  const localState = JSON.parse(localStorage.getItem("user"));

  const user = useContext(UserContext) || localState

  const AuthenticatedRoutes = (props) =>
    <Switch>
      <Route exact path='/'>
        <Redirect to={`/users/${user.uid}`} />
      </Route>
      <Route exact path='/users/:uid'>
        <RecipeCollection />
      </Route>
      <Route path='/recipes/new'>
        <NewRecipe user={props.user} />
      </Route>
      <Route path='/users/:uid/recipes/:id'>
        <Recipe />
      </Route>
      <Route path='/users'>
        <UserCollection />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>



  const NotAuthenticatedRoutes = () =>
    <Switch>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route>
        <Login />
      </Route>
    </Switch>

  return (
    <Router>
      <Header user={user} />
      {
        user
          ?
          <AuthenticatedRoutes user={user} />
          :
          <NotAuthenticatedRoutes />
      }
      <Footer />
    </Router>
  );
}

export default App;
