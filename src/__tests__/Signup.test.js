import React from 'react'
import ReactDom from 'react-dom'
import Signup from '../components/signup/Signup'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Router><Signup /></Router>, div)
})