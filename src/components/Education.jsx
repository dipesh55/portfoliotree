import { resumeData } from '../data/resumeData'
import '../styles/Education.css'

function Education() {
  const { education } = resumeData

  if (!education || education.length === 0) {
    return null
  }

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>
        <div className="education-timeline">
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-school">{edu.school}</p>
                {edu.location && <p className="education-location">{edu.location}</p>}
                <p className="education-year">{edu.year}</p>
                {edu.honors && <p className="education-honors">{edu.honors}</p>}
                {edu.description && <p className="education-description">{edu.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
