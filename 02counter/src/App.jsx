import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    // console.log("Clicked", Math.random())
    // counter = counter + 1
    // setCounter(counter)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    // if(counter >= 20){
    // console.log("Clicked", 20)
    // }else{
    console.log("Clicked", counter)
    // }
  }

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
    // if(counter <=0){

    // }
    // console.log("clicked", counter)
  }

  return (
    <>
      <h1>Chai or react</h1>
      <h2>counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
