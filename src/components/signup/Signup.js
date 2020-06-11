import React, { useState } from 'react'
import { auth, createUserDocument } from '../../firebase'
import { useHistory, Link } from 'react-router-dom'
// import './Signup.css'

const Signup = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const resetForm = () => {
    setFormData({
      displayName: '',
      email: '',
      password: ''
    })
    setError(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(currentData => {
      return { ...currentData, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user } = await auth.createUserWithEmailAndPassword(formData.email, formData.password)
      createUserDocument(user, { displayName: formData.displayName })
      resetForm()
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
          Username:
        <br />
          <input
            className='input-field'
            type='text'
            name='displayName'
            value={formData.displayName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
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
      <button className='submit-button'>Sign up</button>
      <p className='link-to'>
        Already have an account? <Link to={'/login'}>Log in here.</Link>
      </p>
    </form>
  )
}

export default Signup
