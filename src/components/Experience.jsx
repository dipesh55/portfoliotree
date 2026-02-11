import { resumeData } from '../data/resumeData'
import '../styles/Experience.css'

function Experience() {
  const { experience } = resumeData

  if (!experience || experience.length === 0) {
    return (
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">No experience data available</p>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>
        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  {exp.location && <span className="timeline-location">{exp.location}</span>}
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                {exp.achievements && exp.achievements.length > 0 && (
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                )}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
