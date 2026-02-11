import { useEffect } from 'react'
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Achievements from './Achievements'
import Contact from './Contact'
import Footer from './Footer'
import '../styles/PortfolioPage.css'

function PortfolioPage() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <div className="portfolio-page">
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default PortfolioPage
