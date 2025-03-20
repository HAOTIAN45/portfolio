import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import BeforeAbout from './pages/BeforeAbout'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <div className='bg-black w-full h-screen text-white'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/before-about' element={<BeforeAbout/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
