import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import md from '../utils/github-markdown-dark.css'

export default function Markdowner({markdown}) {
  return (
    <div className='w-full h-full markdown-body'>
        <ReactMarkdown
    children={markdown}
    remarkPlugins={[remarkGfm]}
    escapeHtml={false}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={vscDarkPlus}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />
  
    </div>
  )
}