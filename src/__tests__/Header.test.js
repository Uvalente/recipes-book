import React from 'react'
import ReactDom from 'react-dom'
import Header from '../components/header/Header'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render((
    <Router>
      <Header />
    </Router>
  ), div)
})
