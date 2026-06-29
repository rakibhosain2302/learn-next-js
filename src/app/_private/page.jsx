import React from 'react'

const Page = () => {
  return (
    <div className='page-container'>
      <h1 className='page-header'>Private Class Management</h1>
      <p className='content'>Welcome to your private class dashboard.</p>
      <div className="">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Create New Class
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
          Manage Existing Classes
        </button>
      </div>
    </div>
  )
}

export default Page