import React from 'react'

export default function Header(props) {
  return (
    <div className='bg-sky-500 flex flex-col'>
        <h1 className='text-5xl mb-12 '>Header</h1>
        {props.children}
    </div>
  )
}
