import React from 'react'

export default function Resume() {
      // Function will execute on click of button
      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }

    const skills = [
      "Javascript",
      "C#",
      "HTML/CSS",
      "Node.js",
      "React.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "MongoDB",
      "Tailwind",
      "Socket.io",
      "Github/Git",
      "Monogame",
      "Unity"
    ]
  return (
    <div className='grow flex flex-col justify-around items-center rounded-lg border border-neutral-800 p-2.5 bg-black bg-opacity-20'>
      <button className='w-fit px-4 py-2 rounded-md bg-sky-700 text-white text-md' onClick={onButtonClick}>Download</button>

      <ul className='flex flex-wrap m-2 mt-4 rounded-xl border border-neutral-800 bg-black bg-opacity-20 p-2 justify-center'>
        {skills.map((x,i) => <li key={i} className="m-2 border p-1 rounded-lg border-neutral-700">{x}</li>)}
      </ul>

      <div className='icons flex justify-center flex-wrap p-2 h-fit rounded-xl border border-neutral-800 bg-black bg-opacity-20'>
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
