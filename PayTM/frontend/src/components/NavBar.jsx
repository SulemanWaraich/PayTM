import React from 'react'

function NavBar() {
  return (
    <div className='flex justify-between items-center p-4 shadow'>
      <h1 className='text-3xl font-bold'>Payment App</h1>
      <p>Hello, User <button className='border rounded-full bg-slate-200 border-slate-100 px-2 '>S</button></p>
    </div>
  )
}

export default NavBar