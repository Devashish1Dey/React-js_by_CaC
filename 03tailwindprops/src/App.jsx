import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Dev",
    age: 21
  }

  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl p-4 mb-4'>Tailwind test</h1>

      <Card username="Reactchai" someObj={newArr} btntext="click me" />
      <Card username="Dishoom" btntext="visit me" />
    </>
  )
}

export default App
