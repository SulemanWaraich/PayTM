import React from 'react'

function Friend({name, capital}) {
  return (
    <div className='flex items-center space-x-2'>
      <h2 className='bg-green-500 text-white rounded-full p-2 text-lg'>{capital}</h2>
      <p className='font-semibold text-lg'>{name}</p>
    </div>
  )
}

export default Friend