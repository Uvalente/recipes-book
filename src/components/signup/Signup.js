import React, { useState } from 'react'

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
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

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <br />
        <input
        type='text'
        name='username'
        value={formData.username}
        onChange={handleChange}
        required
        />
      </label>
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
