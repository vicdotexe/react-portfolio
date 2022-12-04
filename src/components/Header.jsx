import React from 'react'

export default function Header(props) {
  return (
    <div className='header flex flex-col sm:flex-row items-center sm:justify-between bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-neutral-900 p-4 rounded-2xl bg-opacity-75'>
        <h1 className='text-3xl text-white whitespace-nowrap'>Victor Korn</h1>
        {props.children}
    </div>
  )
}
