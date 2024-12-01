import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-indigo-900 text-white py-3'>
        <div>
            <span className='ml-10 font-bold text-xl cursor-pointer hover:text-blue-400'>iTask</span>
        </div>
      <ul className='flex gap-10 mr-14'>
          <li className='cursor-pointer hover:text-blue-400 hover:text-xl hover:font-bold transition-all'>Home</li>
          <li className='cursor-pointer hover:text-blue-400'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
