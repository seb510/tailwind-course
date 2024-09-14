import { useState } from 'react'
import './App.css'
import {Part3} from "./Part3.jsx";
import {Part4} from "./Part4.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Part4/>
    </>
  )
}

export default App
