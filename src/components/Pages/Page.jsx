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
    <div className='h-full flex flex-col justify-between p-2'>
        <div>
            <h2 className='text-2xl m-4'>{capitalizeFirstLetter(current)}</h2>
            <div className='h-full m-4'>
                {renderPage()}
            </div>
        </div>
        {children}
    </div>
  )
}
