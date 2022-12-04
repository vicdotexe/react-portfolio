import React from 'react'
import { capitalizeFirstLetter } from '../utils/helpers'

export default function Nav(props) {
    const {setPage, pages, current} = props;
    function getUnique(page){
        let color = page == current ? "text-sky-500" : "text-white";
        let hoverColor = page == current ? "" : "hover:text-white";
        return `${color} ${hoverColor}`
    }
  return (
    <div className='self-center flex'>
        {pages.map((page,i)=>{
            return <a 
            href={`#${page}`} 
            key={i} 
            className={`mx-4 text-lg whitespace-nowrap ${getUnique(page)}`}
            onClick={()=>setPage(page)}>
                {capitalizeFirstLetter(page)}
            </a>
        })}
    </div>
  )
}
