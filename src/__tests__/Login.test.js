import React from 'react'
import ReactDom from 'react-dom'
import Login from '../components/login/Login'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Login />, div)
})