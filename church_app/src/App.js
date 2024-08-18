import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import './styles/index.scss'
import NotFound from './components/NotFound'
import Admin from './pages/admin/Admin'
import Agreement from './pages/agreement/Agreement'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onyeisi" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/agreement' element={<Agreement />} />
      </Routes>
    </Layout>
  )
}

export default App
