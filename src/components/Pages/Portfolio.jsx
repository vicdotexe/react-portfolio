import React from 'react'
import Project from '../Project'
import Images from '../../assets'

export default function Portfolio() {
  const projects = [
    {
      title:"Gridlocke",
      description:"A live multiplayer card game, where game-state and logic are managed server-side and rendered/interracted with using React, and communicated using sockets. Players can signup/login, build decks, and play matches against each other by creating/joining rooms.",
      link:"https://www.gridlocke.net",
      repo:"https://github.com/neft-tk/fatal-forge",
      image:Images.Gridlocke
    },
    {
      title:"Renegade Art",
      description:"An art community website where users can upload their artwork, and comment on and like each others art, and follow other artists. (all seed data and art is for demo purposes)",
      link:"https://renegadeart-team8.herokuapp.com/home",
      repo:"https://github.com/vicdotexe/renegade-art",
      image:Images.Renegade
    },{
      title:"Lyrical Letho",
      description:"Search lyrics to find matching songs you may not remember the title/artist of, and optionally stream the songs from spotify or youtube.",
      link:"https://tkmarsten.github.io/lyricalletho/",
      repo:"https://github.com/tkmarsten/lyricalletho/",
      image:Images.LyricalLetho
    },{
      title:"Tech Blog",
      description:"A minimalistic blog website, where users can make blog posts and comment on other blog posts.",
      link:"https://tech-blog-victor.herokuapp.com/",
      repo:"https://github.com/vicdotexe/tech-blog",
      image:Images.TechBlog
    },{
      title:"Weather Dashboard",
      description:"A weather app to search the current weather and 5-day forcast of various cities and zipcodes.",
      link:"https://vicdotexe.github.io/weather-dashboard",
      repo:"https://github.com/vicdotexe/weather-dashboard",
      image:Images.WeatherDashboard
    },{
      title:"Code Quiz",
      description:"A small quiz game with answer tracking and score saving in local storage.",
      link:"https://vicdotexe.github.io/code-quiz",
      repo:"https://github.com/vicdotexe/code-quiz",
      image:Images.CodeQuiz
    },{
      title:"CSS Cheat-Sheet",
      description:"A cheat sheet I made while exploring CSS for the first time.",
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
