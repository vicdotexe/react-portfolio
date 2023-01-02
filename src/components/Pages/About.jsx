import React from 'react'

export default function About() {
  return (
    <div className='page flex flex-col-reverse reverse justify-between md:flex-row'>

        <div className='flex-wrap bg-neutral-900 bg-opacity-40 md:p-2 h-fit rounded-lg border border-neutral-800 bg-black bg-opacity-20'>
          <p>
            I am extremely fascinated by software development. I have a non-traditional entry into the field. After years of hobby projects
            and self-teaching, I came to realize that this is what I love doing. I found myself hooked on problem solving and development, 
            more interested in browsing StackOverflow than the usual hobbies of tv/movies, games, and sports. This epiphany led me to pursue 
            a career in the field, hoping to let my interests and skills become both utilized and valued. 
          </p>
          <p>
            My journey started in C#, learning lower-level game development (Monogame/XNA) outside the confines of a game-engine, re-inventing every wheel that I could to understand how things worked.
            Over time, I became more and more versed in the language of C#, and my interests grew beyond game development, into small native applications
            using Xamarin. Laying things out, styling, utilizing APIs, it opened my eyes to the vast variety of different kinds of development. This is when I decided that I want to do this for a career. Being a father and provider, I don't get enough time 
            in the day to immerse myself in development on top of family and a job, so how great would it be to have a career that quenches my thirst for development?
          </p>
              
          <p>
            I don't have a computer science degree or any traditional schooling, so how am I going to qualify for an interview? The only thing short of spending
            time and money that I didn't have to get a degree, was to get a certificate at a coding bootcamp. Up until this point, I had no prior experience
            in javascript or web development, and I was ready to expand my toolset, so I ended up choosing a Full Stack Web Development bootcamp through the University of Washington.
            I'm very pleased with my decision, as I loved learning both a new language and how the web works.
          </p>

          <p>
          I want to share my skills and passion for growth with an entity that will give me a chance to shine, one which invests in my potential by providing a holistic work environment with star-reaching goals.
          </p>
        </div>

        <div className='icons flex justify-center md:items-start md:min-w-[150px] flex-wrap md:ml-2 md:p-2 h-fit rounded-lg border border-neutral-800 bg-black bg-opacity-20 mb-4'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"width="50" height="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width="50" height="50"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="50" height="50"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"width="50" height="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" height="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" width="50" height="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" width="50" height="50" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="50" height="50" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/MonoGame_Logo.svg" width="50" height="50"/>
          <svg viewBox="0 0 128 128" width="50" height="50">
<path d="M82.48 63.578l22.418-38.402 10.832 38.402-10.832 38.398zm-10.926 6.238l22.422 38.402-39.047-9.922-28.211-28.48zM93.969 18.93L71.555 57.34H26.719L54.93 28.855zm32 31.582L112.293.031 61.25 13.559l-7.555 13.18-15.336-.109L1 63.582l37.359 36.949h.004l15.324-.113 7.57 13.176 51.035 13.527 13.676-50.473-7.762-13.07zm0 0" fill="#d4d4d4"></path>
</svg>
          
        </div>

    </div>
  )
}
