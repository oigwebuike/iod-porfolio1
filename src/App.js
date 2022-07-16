import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layouts'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}/>
        </Routes>
    </div>
  )
}

export default App