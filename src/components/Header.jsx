import React from 'react'

export default function Header(props) {
  return (
    <div className='header flex flex-col sm:flex-row items-center sm:justify-between bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/75 via-neutral-900/75 to-neutral-900/75 p-4 rounded-2xl '>
        <h1 className='text-3xl text-white whitespace-nowrap'>Victor Korn</h1>
        {props.children}
    </div>
  )
}
