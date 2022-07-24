import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
              
              <Route index element={<Home/>}/>
              <Route path='about' index element={<About/>}/>
              <Route path='contact' index element={<Contact/>}/>

            </Route>

        </Routes>
    </div>
  )
}

export default App