import React from 'react'
import './globals.css'

const notFound = () => {
  return (
    <div className='page-container'>
      <h1 className='page-header'>Page Not Found</h1>
      <p className='content'>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}

export default notFound