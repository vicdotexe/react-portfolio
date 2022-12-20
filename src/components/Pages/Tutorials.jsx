import React from 'react'
import { useState, useRef } from 'react'
import Markdowner from '../Markdowner'

const md = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`

export default function Tutorials() {
    const codeAreaRef = useRef();
const [code, setCode] = useState('');
    const [md, setMd] = useState('');

  return (
    <div className='h-[80vh] w-full border flex'>
    <div className='flex resize-x border overflow-auto p-2'>
        <textarea
        className='grow shrink w-full h-full resize-none border-none bg-neutral-900 text-neutral-200'
        name='code'
        value={code}
        ref={codeAreaRef}
        onChange={(e) => {
            setCode(e.target.value);
        }}
        onKeyDown={(e) => {
            if (e.key == 'Tab') {
            e.preventDefault();
            const { selectionStart, selectionEnd } = e.target;

            const newText =
                code.substring(0, selectionStart) +
                '  ' + // Edit this for type tab you want
                    // Here it's 2 spaces per tab
                code.substring(selectionEnd, code.length);

            codeAreaRef.current.focus();
            codeAreaRef.current.value = newText;

            codeAreaRef.current.setSelectionRange(
                selectionStart + 2,
                selectionStart + 2
            );

            setCode(newText);
            }
        }}
        />
    </div>


        <div className='flex overflow-auto border grow shrink'>
        <Markdowner markdown={code}/>
        </div>
        
  
    </div>
  )
}
