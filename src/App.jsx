import { Routes, Route } from 'react-router-dom'
import PortfolioPage from './components/PortfolioPage'
import LinksPage from './components/LinksPage'
import BlogPage from './components/BlogPage'
import TestPage from './components/TestPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/test" element={<TestPage />} />
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/links" element={<LinksPage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  )
}

export default App
