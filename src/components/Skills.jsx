import { resumeData } from '../data/resumeData'
import '../styles/Skills.css'

function Skills() {
  const { skills } = resumeData
  
  const skillCategories = [
    {
      category: 'Languages',
      skills: skills.languages || []
    },
    {
      category: 'Technologies',
      skills: skills.technologies || []
    },
    {
      category: 'Databases',
      skills: skills.databases || []
    },
    {
      category: 'Libraries',
      skills: skills.libraries || []
    },
    {
      category: 'Tools & Others',
      skills: skills.tools || []
    }
  ].filter(category => category.skills.length > 0)

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
