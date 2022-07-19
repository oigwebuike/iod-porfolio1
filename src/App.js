import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layouts'
import Home from './components/home'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
              
              <Route index element={<Home/>}/>

            </Route>

        </Routes>
    </div>
  )
}

export default App