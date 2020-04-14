import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

const Login = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(currentData => {
      return { ...currentData, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await auth.signInWithEmailAndPassword(formData.email, formData.password)
      history.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className='error signup-error'>{error}</p>}
      <div className='field-wrapper'>
        <label>
          Email:
        <br />
          <input
            className='input-field'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className='field-wrapper'>
        <label>
          Password:
        <br />
          <input
            className='input-field'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <button className='submit-button'>Log in</button>
    </form>
  )
}

export default Login
