import React from 'react'
import './Loader.css'

// Thanks to Wadday for the component https://tailwindcomponents.com/u/wadday

const Loader = () => {

  return (
    <div class="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white border py-2 px-5 rounded-lg flex items-center flex-col shadow-md">
        <div class="loader-dots block relative w-20 h-5 mt-2">
          <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-500"></div>
          <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-500"></div>
          <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-500"></div>
          <div class="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-500"></div>
        </div>
        <div class="text-gray-600 font-semibold text-xs mt-2 text-center">
          Loading...
        </div>
      </div>
    </div>
  )
}

export default Loader
