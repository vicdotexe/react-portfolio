import React from 'react'
import Project from '../Project'
import Images from '../../assets'

export default function Portfolio() {
  const projects = [
    
    {
      title:"Renegade Art",
      description:"description",
      link:"https://renegade-art.herokuapp.com",
      repo:"",
      image:Images.Renegade
    },{
      title:"Lyrical Letho",
      description:"description",
      link:"https://tkmarsten.github.io/lyricalletho/",
      repo:"https://github.com/tkmarsten/lyricalletho/",
      image:Images.LyricalLetho
    },{
      title:"Tech Blog",
      description:"description",
      link:"https://tech-blog-victor.herokuapp.com/",
      repo:"https://github.com/vicdotexe/tech-blog",
      image:Images.TechBlog
    },{
      title:"Weather Dashboard",
      description:"description",
      link:"https://vicdotexe.github.io/weather-dashboard",
      repo:"https://github.com/vicdotexe/weather-dashboard",
      image:Images.WeatherDashboard
    },{
      title:"Code Quiz",
      description:"description",
      link:"https://vicdotexe.github.io/code-quiz",
      repo:"https://github.com/vicdotexe/code-quiz",
      image:Images.CodeQuiz
    },{
      title:"CSS Cheat-Sheet",
      description:"description",
      link:"https://vicdotexe.github.io/module02-miniproject",
      repo:"https://github.com/vicdotexe/module02-miniproject",
      image:Images.CSSCheatSheet
    },

    
  ]
  return (
    <div className='flex flex-wrap rounded-lg border border-neutral-800 p-2.5 bg-black bg-opacity-20'>
      {projects.map((item,index)=>{
        return <Project info={item} key={index}></Project>
      })}
    </div>
  )
}
