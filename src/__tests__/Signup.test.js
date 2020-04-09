import React from 'react'
import ReactDom from 'react-dom'
import Signup from '../components/signup/Signup'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Signup />, div)
})