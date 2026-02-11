import { useEffect } from 'react'
import { trackPageView } from '../utils/analytics'
import { resumeData } from '../data/resumeData'
import '../styles/Home.css'

function Home() {
  useEffect(() => {
    trackPageView('home')
  }, [])

  const { personal } = resumeData

  const handleKnowMore = (e) => {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Extract first sentence for one-line description
  const oneLineDescription = personal.summary.split('.')[0] + '.'

  return (
    <section id="home" className="home-hero">
      <div className="home-hero-container">
        <div className="home-hero-content">
          <h1 className="home-hero-headline">
            Hi, my name is <span className="home-hero-name">{personal.name}</span>.
            <br />
            I'm a <span className="home-hero-role">{personal.title}</span>.
          </h1>
          <p className="home-hero-description">
            {oneLineDescription}
          </p>
          <button 
            className="home-hero-cta" 
            onClick={handleKnowMore}
            aria-label="Know more about me"
          >
            Know more
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
