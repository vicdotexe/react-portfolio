import React from 'react'

export default function Header(props) {
  return (
    <div className='header flex flex-col flex-wrap sm:flex-row items-center sm:justify-between bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/75 via-neutral-900/75 to-black/50 p-4 rounded-lg '>
        <h1 className='text-5xl text-white whitespace-nowrap font-gruppo font-bold'>Victor Korn</h1>
        {props.children}
    </div>
  )
}
