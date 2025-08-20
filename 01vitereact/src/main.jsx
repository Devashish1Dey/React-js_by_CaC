import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import { jsx as _jsx } from 'react/jsx-runtime'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }

const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai or react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank' },
  'click me to visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   {/* <App /> */}
  //   {/* <MyApp /> */}
  //   {/* <ReactElement /> */}

  // </StrictMode>,
  // MyApp()
  // anotherElement
  reactElement
)
