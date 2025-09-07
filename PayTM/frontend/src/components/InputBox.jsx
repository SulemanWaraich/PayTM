import React from 'react'

function InputBox({name, place, onChange}) {
  return (
    <>
    <div className='text-lg font-medium text-left py-2'>
      <label htmlFor="">{name}</label>
    </div>
    <input onChange={onChange} type="text" placeholder={place} className='w-full rounded border px-2 py-1 border-slate-200'/>
    </>
  )
}

export default InputBox