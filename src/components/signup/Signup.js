import React, { useState } from 'react'
import { auth, createUserDocument } from '../../firebase'

const Signup = () => {
  const [formData, setFormData] = useState({
    displayName: '',
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
      const { user } = await auth.createUserWithEmailAndPassword(formData.email, formData.password)
      createUserDocument(user, { displayName: formData.displayName })
    } catch (error) {
      // setError message
      console.log(error)
      // resetForm
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <br />
        <input
          type='text'
          name='displayName'
          value={formData.displayName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <br />
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <button>Sign up</button>
    </form>
  )
}

export default Signup
