import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import MainContent from './pages/MainContent'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<MainContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App