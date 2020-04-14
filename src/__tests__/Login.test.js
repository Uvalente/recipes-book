import React from 'react'
import ReactDom from 'react-dom'
import Login from '../components/login/Login'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Router><Login /></Router>, div)
})