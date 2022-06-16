import React from 'react'

function Button(props) {
  return (
    <button className='text-black bg-white py-2 px-6  rounded'>
    {props.children}
    </button>
  )
}

export default Button