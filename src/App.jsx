import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-800">
      <h1 className="text-5xl font-bold text-white px-10 py-5 bg-white/10 rounded-3xl shadow-2xl backdrop-blur-sm hover:scale-105 transition duration-300">Hello</h1>
    </div>


  )
}

export default App
