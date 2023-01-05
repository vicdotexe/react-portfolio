import React from 'react'
import { useState } from 'react'
import Tutorial from './Tutorial';

const myTuts = new Map();
myTuts.set('Elevation in 2D', <Tutorial/>)

export default function CoolStuff() {
    const [current,setCurrent] = useState();
    const options = ['Elevation in 2D']

    function renderOptions(){
        return (
            <div>
                {options.map((x,i)=>{
                    return (
                        <h3 id={i} className='hover:text-sky-500' onClick={()=>{setCurrent(x)}}>{x}</h3>
                    )
                })}
            </div>
        )
    }

  return (
    <div>
        {/* {renderOptions()} */}
        <div className='m-3'>
            Eventually more of my personal coding adventures will go here, but here's a tutorial for now!
        </div>
        <div className='bg-black/25 p-2'>
        {/* {current && myTuts.get(current)} */}
        <Tutorial/>
        </div>
        
    </div>
  )
}
