import { resumeData } from '../data/resumeData'
import '../styles/Achievements.css'

function Achievements() {
  const { achievements } = resumeData

  if (!achievements || achievements.length === 0) {
    return null
  }

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements & Awards</h2>
        <p className="section-subtitle">Recognition and accomplishments</p>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-organization">{achievement.organization}</p>
                <p className="achievement-year">{achievement.year}</p>
                {achievement.description && (
                  <p className="achievement-description">{achievement.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
