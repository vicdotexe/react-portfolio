import React from 'react'
import { capitalizeFirstLetter } from '../utils/helpers'

export default function Nav(props) {
    const {setPage, pages, current} = props;
    function getUnique(page){
        let color = page == current ? "text-white" : "text-zinc-800";
        let hoverColor = page == current ? "" : "hover:text-white";
        return `${color} ${hoverColor}`
    }
  return (
    <div className='self-end flex mb-2'>
        {pages.map((page,i)=>{
            return <a 
            href={`#${page}`} 
            key={i} 
            className={`mx-4 text-2xl ${getUnique(page)}`}
            onClick={()=>setPage(page)}>
                {capitalizeFirstLetter(page)}
            </a>
        })}
    </div>
  )
}
