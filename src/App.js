import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HealthStack from './component/Projects/healthStack'
import FrontPage from './FrontPage'
import Drug from './component/Projects/drugTarget'
import Library from './component/Projects/library'

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
        <Route path='/' exact element={<FrontPage/>} />
        <Route path='/health' element={<HealthStack/>} />
        <Route path='/drug' element={<Drug/>} />
        <Route path='/library' element={<Library/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
