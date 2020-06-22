import React from 'react'

const UserCard = (props) => {
  return (
    <div className='w-1/2 sm:w-1/4 lg:w-1/5 xl:w-1/6 p-2 lg:p-4 xl:p-6 relative'>
      <img
        className='rounded-full shadow-lg'
        src='/no_image.jpg'
        alt={`${props.displayName} Avatar`}
      />
      <div className='my-2 bg-white py-2 px-4 rounded-lg shadow-lg relative -my-6'>
        <p
          className='text-gray-900 text-lg font-semibold truncate text-center'
        >
          {props.displayName}
        </p>
      </div>
    </div>
  )
}

export default UserCard