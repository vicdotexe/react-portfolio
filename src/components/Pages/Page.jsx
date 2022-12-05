import React from 'react'
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import About from './About';
import { capitalizeFirstLetter } from '../../utils/helpers';

export default function Page({current, children}) {
    function renderPage(){
        switch(current){
            case "about me": return <About/>
            case "portfolio": return <Portfolio/>
            case "contact": return <Contact/>
            case "resume": return <Resume/>
            default: return <h1>That page doesn't exist.</h1>
        }
    }
  return (
    <div  id="pageContainer" className='grow flex flex-col min-w-100% bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/75 via-neutral-900/75 to-neutral-900/75 p-4 rounded-2xl bg-opacity-75 my-4'>
        <h2 className='text-2xl my-4 mx-2 '>{capitalizeFirstLetter(current)}</h2>
        {renderPage()}
    </div>
  )
}
