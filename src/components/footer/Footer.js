import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-900 text-gray-400 px-6 py-6 lg:py-8 lg:px-12 text-xs flex'>
      <div className='w-1/2'>
        <h3 className='font-semibold uppercase text-sm'>
          Author
        </h3>
        <p className='pt-2'>
          Umberto Valente
        </p>
        <a
          href='mailto:uvalente89@gmail.com'
          title='Umberto Valente LinkedIn'
          target='blank'
          className='hover:text-white'
        >
          <i className="fas fa-envelope-square text-3xl mr-2 mt-1"></i>
        </a>
        <a
          href='https://www.linkedin.com/in/umberto-valente-360375195/'
          title='Umberto Valente LinkedIn'
          target='blank'
          className='hover:text-white'
        >
          <i className="fab fa-linkedin text-3xl mr-2 mt-1" />
        </a>
        <a
          href='https://github.com/Uvalente'
          title='Umberto Valente GitHub'
          target='blank'
          className='hover:text-white'
        >
          <i className="fab fa-github-square text-3xl" />
        </a>
      </div>
      <div className='w-1/2 text-right'>
        <h3 className='font-semibold uppercase text-sm'>
          Credits
        </h3>
        <p className='pt-2'>
          Icon made by <a href="https://www.flaticon.com/free-icon/bake_2917629" title="ultimatearm" target='blank' className='hover:text-white'>ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon" target='blank' className='hover:text-white'> www.flaticon.com</a>
        </p>
        <p>
          Photos by <a href='https://unsplash.com/@ugmonk' title='Jeff Sheldon' target='blank' className='hover:text-white'>Jeff Sheldon</a> and <a href='https://unsplash.com/@moniqa' title='Monika Grabkowska' target='blank' className='hover:text-white'>Monika Grabkowska</a> on <a href='https://unsplash.com' title='Unsplash' target='blank' className='hover:text-white'>Unsplash</a>
        </p>
      </div>
    </footer >
  )
}

export default Footer
