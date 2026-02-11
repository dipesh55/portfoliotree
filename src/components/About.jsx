import { resumeData } from '../data/resumeData'
import '../styles/About.css'

function About() {
  const { personal, experience, projects } = resumeData
  
  // Calculate stats from resume data
  const calculateYearsOfExperience = () => {
    // Return 5 years of experience
    return 5
  }
  
  const yearsOfExperience = calculateYearsOfExperience()
  const projectsCount = projects ? projects.length : 0
  const companiesWorked = 3 // Fixed to show 3+ companies

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {personal.summary}
            </p>
            <p>
              I'm based in {personal.location} and always open to discussing new opportunities, 
              innovative projects, or just having a conversation about technology and development.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>{projectsCount}+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>{yearsOfExperience}+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>{companiesWorked}+</h3>
                <p>Companies Worked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
