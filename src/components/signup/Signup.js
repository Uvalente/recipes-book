import React, { useState } from 'react'
import { auth, createUserDocument } from '../../firebase'
import { useHistory, Link } from 'react-router-dom'

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
    <div className='flex'>
      <div className='hidden lg:block lg:w-1/2 lg:relative'>
        <img src='/tablet-recipe-2.jpg' className='absolute inset-0 h-full w-full object-cover object-center' alt='' />
      </div>
      <div className='mx-auto max-w-md lg:w-1/2 lg:py-6 lg:max-w-lg'>
        <form onSubmit={handleSubmit} className='bg-white m-6 p-6 shadow-md rounded-lg'>
          <h3 className='uppercase font-semibold text-gray-900 tracking-wide text-center text-xl lg:py-2'>Register</h3>
          {
            error &&
            <div className='bg-red-100 border-t-4 border-red-400 text-red-600 mt-4 px-4 py-3 rounded-b shadow-md font-semibold'>
              <p>{error}</p>
            </div>
          }
          <label className='block text-gray-900 mb-2 font-semibold pt-4' htmlFor='displayName'>
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='displayName'
            type='text'
            name='displayName'
            value={formData.displayName}
            onChange={handleChange}
            required
          />

          <label className='block text-gray-900 mb-2 font-semibold pt-4' htmlFor='email'>
            Email
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className='block text-gray-900 mb-2 font-semibold pt-4' htmlFor='password'>
            Password
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className='mt-6 bg-blue-700 hover:bg-blue-600 text-white font-bold py-1 px-4 border-b-4 border-blue-900 hover:border-blue-800 rounded-md'>Sign up</button>
          <p className='pt-4 text-gray-700 text-sm'>
            Already have an account? <Link to={'/login'} className='font-semibold text-blue-700 hover:text-blue-600'>Log in here.</Link>
          </p>
        </form>
      </div >
    </div >
  )
}

export default Signup
