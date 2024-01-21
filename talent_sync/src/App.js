import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NotFound from './components/NotFound'
import './styles/index.scss'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
