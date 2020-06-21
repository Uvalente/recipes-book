import React, { useContext } from 'react'
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
import { UserContext } from './providers/UserProvider'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'

function App() {
  const localState = JSON.parse(localStorage.getItem("user"));

  const user = useContext(UserContext) || localState

  const AuthenticatedRoutes = (props) =>
    <Switch>
      <Route exact path='/'>
        <RecipeCollection user={props.user} />
      </Route>
      <Route path='/recipes/new'>
        <NewRecipe user={props.user} />
      </Route>
      <Route path='/recipes/:id'>
        <Recipe user={props.user} />
      </Route>
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
