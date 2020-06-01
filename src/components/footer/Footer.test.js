import React from 'react'
import ReactDom from 'react-dom'
import Footer from './Footer'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<Footer />, div)
})
