import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='page-container'>
      <h1 className='page-header'>User List</h1>
      <p className='content'>
        Browse and manage users.
      </p>
      { children }
    </div>
  )
}

export default Layout