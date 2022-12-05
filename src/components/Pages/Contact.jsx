import React from 'react'
import { useState } from 'react'

const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalMessage, setModal] = useState('');

  const onSubmit = (e)=>{
    e.preventDefault();
    if (!name){
      showModal("Please include your name.");
    }else if (!email){
      showModal("Please include your email.");
    }else if (!emailReg.test(email)){
      showModal("Invalid email address.");
    }else if (!message){
      showModal("Please include a message.")
    }else{
      showModal("Message sent! Thank you for your interest!")
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  const showModal = (message)=>{
    setModal(message);
    document.querySelector("#defaultModal").classList.remove("hidden");
  }

  const hideModal = ()=>{
    document.querySelector("#defaultModal").classList.add("hidden");
  }

  return (
    <form className='flex flex-col rounded-xl border border-neutral-800 p-2.5 bg-black bg-opacity-20' onSubmit={onSubmit}>

      <div className='my-4'>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} className="bg-neutral-700 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" placeholder="name"/>
      </div>

      <div className='my-4'>
        <label htmlFor="email-address" className="block mb-2 text-sm font-medium">Your Email</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </div>
          <input type="text" id="email-address" value={email} onChange={(e)=>setEmail(e.target.value)} className="bg-neutral-700 border border-gray-500  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 pl-10 p-2.5" placeholder="name@email.com"/>
        </div>
      </div>
     
      <div className='my-4'>
        <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
        <textarea id="message" rows="6" value={message} onChange={(e)=>setMessage(e.target.value)} className="block p-2.5 w-full text-sm bg-neutral-700 rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a message..."></textarea>
      </div>
    
      <button type="submit" className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
    
{/* <!-- Main modal --> */}
<div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed hidden w-screen h-screen p-4 inset-0 flex">
      <div className="relative w-full h-full md:h-auto flex justify-center items-center">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg shadow bg-gray-700 w-full sm:w-3/4 md:w-1/2">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-100">
                      Hey
                  </h3>
                  <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={hideModal}>
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {modalMessage}
                  </p>
              </div>
              {/* <!-- Modal footer --> */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={hideModal}>Ok</button>
              </div>
          </div>
      </div>
</div>

    </form>

    
  )
}
