import React from 'react'
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/helpers'
import { useLocation } from 'react-router-dom';

export default function Nav(props) {
    const location = useLocation();

    function getUnique(page){

        let current = location.pathname;
        let color = page == current ? "text-sky-500" : "text-white";
        let hoverColor = page == current ? "" : "hover:text-white";
        return `${color} ${hoverColor}` + ' mx-4 whitespace-nowrap'
    }
  return (
    <div className='self-center flex'>
        {/* {pages.map((page,i)=>{
            return <a 
            href={`#${page}`} 
            key={i} 
            className={`mx-4 text-lg whitespace-nowrap ${getUnique(page)}`}
            onClick={()=>setPage(page)}>
                {capitalizeFirstLetter(page)}
            </a>
        })} */}
        <Link to="/" className={`${getUnique('/')}`}>About Me</Link>
        <Link to="/portfolio" className={`${getUnique('/portfolio')}`} >Portfolio</Link>
        <Link to="/contact" className={`${getUnique('/contact')}`}>Contact</Link>
        <Link to="/resume" className={`${getUnique('/resume')}`}>Resume</Link>
        <Link to="/tutorials" className={`${getUnique('/tutorials')}`}>Tutorials</Link>
    </div>
  )
}
